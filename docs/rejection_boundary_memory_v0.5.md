# Rejection Boundary Memory Specification v0.5

## Purpose

Define the memory structure updated by RII_UPDATE.

This specification stores:

- learned rejection boundaries
- inferred failure patterns
- updated reject conditions
- boundary confidence
- revision history

Without this layer, RII_UPDATE has no persistent target.

---

## Core Idea

Rejection is not only a rule.

It is a learned boundary.

A rejection boundary may change when:

- failure reveals hidden conditions
- collapse patterns are observed
- pilot outcomes invalidate prior assumptions
- risk thresholds shift
- repeated observations strengthen rejection confidence

This memory stores those changes.

---

## Memory Object

## Boundary Record

```json
{
  "boundary_id": "rb-001",

  "issue_type": "resource_distribution",

  "failure_pattern": "single-point staffing overload",

  "reject_condition": "reject full-scale rollout under staffing variance >20%",

  "boundary_confidence": 0.76,

  "source": "pilot_failure",

  "revision_count": 3,

  "last_updated": "2026-04-20T12:00:00Z"
}
```

---

## Required Fields

### boundary_id
Unique rejection boundary identifier.

---

### issue_type
Decision category the boundary belongs to.

Examples:

- resource_distribution  
- governance_latency  
- infrastructure_fragility  
- demand_instability

---

### failure_pattern
Observed breakdown pattern.

Represents:

What actually failed.

---

### reject_condition
The updated boundary rule inferred from failure.

Represents:

What should now be rejected.

---

### boundary_confidence
Confidence score.

Range:

0.0 — 1.0

---

### source
Update origin.

Enum:

- pilot_failure
- observed_collapse
- repeated_signal
- manual_review

---

### revision_count
Number of times this boundary has been revised.

---

### last_updated
Timestamp.

---

## Boundary Update Logic

Triggered by:

```text
PILOT
↓ failure
RII_UPDATE
↓
Boundary Memory Update
```

---

## Update Rules

### Rule 1
Failure may create a new boundary.

---

### Rule 2
Failure may strengthen an existing boundary.

Increase:

boundary_confidence

---

### Rule 3
Failure may revise reject_condition.

Not all updates increase strictness.

Some may relax prior boundaries.

---

### Rule 4
Every update increments:

revision_count

---

## Minimal Update Example

Before:

```json
{
  "reject_condition":
  "avoid full rollout if staffing risk extreme",

  "boundary_confidence":0.58
}
```

After pilot failure:

```json
{
  "reject_condition":
  "reject full rollout if staffing variance >20%",

  "boundary_confidence":0.76
}
```

---

## Boundary Memory Collection

```json
{
  "boundary_memory":[
    {
      "boundary_id":"rb-001"
    },
    {
      "boundary_id":"rb-002"
    }
  ]
}
```

---

## Optional Future Extensions

May later add:

- decay_rate
- contradiction_flag
- linked_issue_ids
- boundary_dependencies
- conflict_resolution_priority

Not required for v0.5.

---

## Minimal JSON Schema (Draft)

```json
{
  "type":"object",

  "required":[
    "boundary_id",
    "failure_pattern",
    "reject_condition",
    "boundary_confidence"
  ],

  "properties": {

    "boundary_id":{
      "type":"string"
    },

    "failure_pattern":{
      "type":"string"
    },

    "reject_condition":{
      "type":"string"
    },

    "boundary_confidence":{
      "type":"number",
      "minimum":0,
      "maximum":1
    }
  }
}
```

---

## Architectural Significance

This gives RII_UPDATE a persistent target.

Without this:

RII_UPDATE is procedural only.

With this:

RII_UPDATE becomes learning.

---

## Relationship to v0.4

v0.4 defined:

```text
PILOT
↓ failure
RII_UPDATE
↓
REFRAME
```

v0.5 defines:

What is updated inside RII_UPDATE
before returning to REFRAME.

This closes the loop.

---

## Result

LoPAS-DDA now has:

- Design Spec
- Decision Card Schema
- Evaluate API
- Judgment State Machine
- Rejection Boundary Memory

This completes the minimal core stack.
