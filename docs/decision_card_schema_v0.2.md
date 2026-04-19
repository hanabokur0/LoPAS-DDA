# Decision Card Schema Specification v0.2

## Purpose

Define the structured decision object returned by LoPAS-DDA.

The Decision Card stores:

- issue identity  
- assessment indicators  
- rejection conditions  
- withholding conditions  
- verdict  
- learning signals  
- review triggers

It is the core decision unit of the architecture.

---

## Core Structure

A Decision Card contains six components:

1. Issue

2. Assessment

3. Boundary

4. Decision

5. Learning

6. Timestamps

---

## 1. Issue

Required fields:

```json
{
  "issue_id":"case-001",
  "issue_title":"Medication queue overload",
  "current_question":"Should demand distribution be piloted?"
}
```

Purpose:

Define the decision target.

---

## 2. Assessment

Mandatory indicators:

```json
{
  "doq":74,
  "cci":68,
  "bcdi":71,
  "rii":62,
  "hri":66,
  "cocli":72
}
```

Optional indicators:

```json
{
  "rdi":64,
  "trs":70,
  "sci":28,
  "cdi":61
}
```

Purpose:

Represent structural judgment conditions.

---

## 3. Boundary

### Reject Conditions

```json
[
 "single-point staffing overload"
]
```

Conditions under which the issue should be rejected.

---

### Withholding Conditions

```json
[
 "need one additional weekly observation cycle"
]
```

Conditions under which judgment should remain open.

---

### Revisit Triggers

```json
[
 "queue length exceeds threshold"
]
```

Conditions that trigger re-evaluation.

---

## 4. Decision

Verdict enum:

```text
EXECUTE
PILOT
HOLD
REFRAME
REJECT
OBSERVE_MORE
```

Example:

```json
{
  "verdict":"PILOT",
  "confidence":0.73
}
```

---

## 5. Learning

Learning flags:

```json
{
  "boundary_update_required":false,
  "rii_update_pending":false
}
```

Purpose:

Signal whether rejection boundary learning is required.

---

## 6. Timestamps

```json
{
  "created_at":"2026-04-20T10:00:00Z",
  "review_at":"2026-04-27T10:00:00Z"
}
```

Purpose:

Represent temporal structure.

Supports:

- review cycles  
- withholding as process  
- delayed judgment

---

## Full Example Decision Card

```json
{
  "issue_id":"case-001",

  "issue_title":"Medication queue overload",

  "current_question":
  "Should demand distribution be piloted?",

  "assessment":{

    "doq":74,
    "cci":68,
    "bcdi":71,
    "rii":62,
    "hri":66,
    "cocli":72

  },

  "reject_conditions":[
    "single-point staffing overload"
  ],

  "withholding_conditions":[
    "need 7 more days observation"
  ],

  "decision":{

    "verdict":"PILOT",
    "confidence":0.73

  },

  "learning":{

    "boundary_update_required":false,
    "rii_update_pending":false

  },

  "timestamps":{

    "created_at":"2026-04-20T10:00:00Z"

  },

  "version":"0.2"
}
```

---

## Structural Rules

### Rule 1

Every Decision Card must contain:

- issue  
- assessment  
- decision

Mandatory.

---

### Rule 2

Every Decision Card must contain:

verdict

from enum only.

---

### Rule 3

HOLD and OBSERVE_MORE should include:

withholding_conditions

---

### Rule 4

PILOT failure may set:

boundary_update_required=true

---

## Relationship to v0.1

v0.1 defined:

the architecture.

v0.2 defines:

the decision object.

---

## Relationship to v0.3

v0.3 uses the Decision Card

as API request/response structure.

---

## Result

The Decision Card is:

the minimum structured judgment unit

inside LoPAS-DDA.
