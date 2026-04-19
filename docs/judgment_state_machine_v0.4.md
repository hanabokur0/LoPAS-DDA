# Judgment State Machine Specification v0.4

## Purpose

Move LoPAS-DDA from single-pass verdict evaluation into stateful deliberation.

A verdict alone is insufficient.  
A judgment architecture also needs defined state transitions.

---

## States

### Primary States

1. INTAKE  
2. QUESTION_GATE  
3. BRANCHING  
4. HOLD  
5. OBSERVE_MORE  
6. REFRAME  
7. PILOT  
8. EXECUTE  
9. REJECT  
10. RII_UPDATE

---

## Core Transition Logic

### Intake Flow

```text
INTAKE
↓
QUESTION_GATE
```

---

### Question Gate Transitions

```text
If DoQ < 25
→ REFRAME

If 25 <= DoQ < 40
→ OBSERVE_MORE

Else
→ BRANCHING
```

---

### Branching Transitions

```text
If BCDI insufficient
→ OBSERVE_MORE

If COCLI unstable
→ HOLD

If SCI critical
→ REJECT

If RII weak
→ PILOT

Else
→ EXECUTE
```

---

## Dynamic Transitions

### HOLD

```text
HOLD
↓ (time trigger or new signal)
OBSERVE_MORE
```

Rule:  
HOLD must not be terminal.  
HOLD must have revisit triggers.

---

### OBSERVE_MORE

```text
OBSERVE_MORE
↓ (DoQ improved)
BRANCHING

OBSERVE_MORE
↓ (question malformed)
REFRAME
```

---

### REFRAME

```text
REFRAME
↓
BRANCHING
```

Rule:  
Reframing always returns to branch generation.

---

### PILOT

```text
PILOT
↓ success
EXECUTE

PILOT
↓ failure
RII_UPDATE
```

---

### RII_UPDATE

```text
RII_UPDATE
↓
REFRAME
```

Rule:  
Failure updates rejection boundaries before returning.

---

## State Transition Table

| Current State | Condition | Next State |
|---|---|---|
| QUESTION_GATE | DoQ < 25 | REFRAME |
| QUESTION_GATE | DoQ 25–39 | OBSERVE_MORE |
| QUESTION_GATE | DoQ >= 40 | BRANCHING |
| BRANCHING | COCLI unstable | HOLD |
| BRANCHING | SCI critical | REJECT |
| BRANCHING | RII weak | PILOT |
| BRANCHING | otherwise | EXECUTE |
| HOLD | revisit trigger met | OBSERVE_MORE |
| OBSERVE_MORE | DoQ improved | BRANCHING |
| OBSERVE_MORE | framing failure | REFRAME |
| PILOT | success | EXECUTE |
| PILOT | failure | RII_UPDATE |
| RII_UPDATE | boundary updated | REFRAME |

---

## State Invariants

### Invariant 1
REJECT is terminal for the current issue.

### Invariant 2
HOLD is never terminal.

### Invariant 3
REFRAME always returns to BRANCHING.

### Invariant 4
Pilot failure must pass through RII_UPDATE.

No direct failure → EXECUTE retry.

---

## Optional Response Extension

```json
{
  "decision": {
    "verdict":"PILOT"
  },
  "next_state":"PILOT",
  "revisit_trigger":"7_day_observation_window"
}
```

---

## Minimal Worker Extension (Future)

```javascript
next_state = verdict;
```

Later promote to real transition engine.

---

## Architectural Significance

This converts LoPAS-DDA from:

Verdict Engine

into:

Judgment State Machine
