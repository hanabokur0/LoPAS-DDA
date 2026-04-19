# LoPAS-DDA / README (Draft v0.1)

## Deliberative Decision Architecture

LoPAS-DDA is an experimental decision architecture centered not only on action and output, but on the structural conditions under which judgment should occur, be withheld, be reframed, or be rejected.

Most systems optimize:

* faster answers
* better answers
* aligned answers

LoPAS-DDA additionally asks:

* Should this question be answered yet?
* Should this issue be reframed first?
* Should judgment be withheld because information value may increase over time?
* Should rejection boundaries be updated from failure?
* Is the cognitive climate fit for decision at all?

In that sense, LoPAS-DDA is not only an answer architecture.
It is a deliberation architecture.

---

## Core Concepts

LoPAS-DDA treats the following as first-class functions:

### Withholding

Not delay, but temporal processing.

### Silence

Not absence, but control.

### Rejection

Not static refusal, but dynamically learned boundary formation.

### Reframing

Not correction, but transformation of the question itself.

### Cognitive Climate

Decision quality depends partly on the conditions under which judgment is made.

---

## Core Indicators

Mandatory stack:

* DoQ
* CCI
* BCDI
* RII
* HRI
* COCLI

Recommended:

* RDI
* TRS
* SCI
* CDI

---

## Core Protocols

* Intake Normalization
* Question Density Gate
* Branching
* Rejection Boundary
* Silence / Withholding
* Reframing
* Execution Gate
* Post-Decision Learning

---

## Minimal API

```http
POST /v1/evaluate
```

Returns:

* EXECUTE
* PILOT
* HOLD
* REFRAME
* REJECT
* OBSERVE_MORE

---

## Minimal Worker

Located in:

```text
worker/index.js
```

Runs a minimal evaluator using threshold-based verdict routing.

---

## Repository Structure

```text
LoPAS-DDA/
├── README.md
├── docs/
├── schema/
├── worker/
└── examples/
```

---

## Status

Current status:

* Design spec drafted
* Decision Card schema drafted
* /v1/evaluate API drafted
* Cloudflare Worker smoke-tested
* Judgment State Machine in progress

---

## Positioning

LoPAS-DDA does not primarily optimize what to output.

It optimizes:

* whether output should occur
* when judgment should be delayed
* when a question should be transformed
* how rejection boundaries should evolve through experience

---

## License

Draft (TBD)

---

## Next

Planned next layers:

1. Judgment State Machine
2. Rejection Boundary Memory
3. Stateful evaluator
4. Human-AI joint deliberation profile

---

# LoPAS-DDA Design Specification v0.1

## Subtitle

A Deliberative Decision Architecture centered on withholding, silence, and dynamically updated rejection boundaries.

---

## 0. Overview

LoPAS-DDA is a decision architecture that treats **withholding**, **silence**, and **rejection** not as failure states, but as core decision functions.

Most existing AI and decision systems optimize for:

* faster output
* more accurate output
* more desirable output

LoPAS-DDA instead asks a prior question:

**Under what structural conditions should judgment occur, be withheld, be reframed, or be rejected?**

This architecture is therefore not merely an answer engine.
It is a **deliberation engine**.

Its central proposition is:

> Intelligence is not exhausted by output. Intelligence also appears in the structured capacity to withhold, remain silent, reject, reframe, and update decision boundaries through experience.

---

## 1. Core Thesis

### 1.1 Traditional optimization target

Conventional systems tend to optimize positive output:

* answer generation
* action selection
* policy convergence
* confidence calibration

### 1.2 LoPAS-DDA target

LoPAS-DDA optimizes the **conditions of judgment**:

* whether a question is structurally worth answering
* whether current conditions are fit for judgment
* whether rejection boundaries should be updated
* whether withholding creates greater information value
* whether reframing is superior to immediate resolution

### 1.3 Foundational shift

LoPAS-DDA makes five structural moves:

1. **Withholding is a function, not a delay**
2. **Silence is a control layer, not a lack**
3. **Rejection is learned, not merely rule-based**
4. **Question quality is evaluated before answer quality**
5. **Decision climate is part of the decision itself**

---

## 2. Design Principles

### Principle 1. Withholding is temporal processing

Withholding is not a blank interval.
It is a period during which:

* information accumulates
* noise decays
* impulsive convergence weakens
* hidden variables become visible
* premature judgment can be avoided

### Principle 2. Silence is an active control mechanism

Silence is not absence.
Silence serves to:

* suppress over-completion
* preserve uncertainty where uncertainty is real
* prevent hallucinated closure
* maintain structural stability under ambiguity

### Principle 3. Rejection creates judgment boundaries

If every input is accepted, no real judgment layer exists.
Judgment begins when the system can:

* accept
* reject
* withhold
* reframe

Rejection therefore generates boundary.
Boundary generates selection.
Selection generates judgment.

### Principle 4. Rejection boundaries must evolve from experience

A static rule can filter.
But only an adaptive inverse-inference process can update what deserves rejection under changing reality.

### Principle 5. Poor questions should not pass unchallenged

The structure of the input matters.
A system that only optimizes answers will waste capacity on structurally empty prompts.
Question density must be evaluated before downstream judgment.

### Principle 6. Decision quality depends on cognitive climate

A judgment made in an overheated, noisy, exhausted, or collapsed environment should not be treated as equivalent to one made under stable cognitive climate.

---

## 3. Key Concepts

### 3.1 Withholding

A strategic decision not to finalize judgment yet.
Not indecision, but delayed closure for structural gain.

### 3.2 Silence

A non-output state preserving uncertainty and suppressing false completion.

### 3.3 Rejection

A deliberate exclusion based on inferred failure conditions, collapse risk, or boundary violation.

### 3.4 Reframing

A transformation of the question space when the current framing yields false binaries, repeated failure, or low-value deliberation.

### 3.5 Judgment Climate

The environmental condition under which higher-order reasoning is more or less likely to be trustworthy.

### 3.6 Dynamic Rejection Boundary

A learned and updateable threshold that decides what should be rejected, held, or admitted, based on inverse inference from outcomes.

---

## 4. Architectural Layers

### Layer 0. Intake Layer

Receives:

* issue/request/problem statement
* constraints
* deadlines
* affected actors
* known data
* unknown variables
* context traces

Function:
Normalize raw input into structured decision material.

---

### Layer 1. Observation Layer

Receives structured signals and maps them into observable patterns.

Function:

* identify friction
* identify missing information
* identify recurring failure structures
* separate observation from interpretation

Primary concern:
What is actually happening?

---

### Layer 2. Branching Layer

Generates possible paths rather than collapsing into a single immediate answer.

Function:

* condition splitting
* case differentiation
* scenario generation
* maintain branch diversity without losing structure

Primary concern:
What are the real branches here?

---

### Layer 3. Judgment Layer

Core decision layer.

Possible outputs:

* Accept
* Reject
* Withhold
* Reframe
* Observe More

Primary concern:
Should judgment occur now, and in what mode?

---

### Layer 4. Reframing Layer

Activated when current framing is insufficient.

Function:

* redefine scope
* change time horizon
* change actor unit
* split false binary
* regenerate problem structure

Primary concern:
Is the question itself malformed?

---

### Layer 5. Execution Gate Layer

Only after prior layers stabilize.

Possible outputs:

* Execute
* Pilot
* Hold
* Reject
* Continue Observation

Primary concern:
What degree of action is justified?

---

### Layer 6. Learning Layer

Updates boundaries from results.

Function:

* compare expected vs observed outcome
* identify hidden variables
* infer updated rejection conditions
* revise withholding triggers
* revise reframing triggers

Primary concern:
What did failure or success teach the architecture?

---

## 5. Indicator Stack

Indicators are grouped as mandatory, recommended, and extended.

### 5.1 Mandatory indicators

#### DoQ — Density of Questions

Purpose:

* assess whether the issue is structurally rich enough for meaningful judgment
* block low-density inputs from forcing premature output

Questions:

* Is there enough question-structure present?
* Is this issue under-specified?
* Is withholding warranted because the question is thin?

---

#### CCI — Cognitive Connectivity Index

Purpose:

* measure whether the issue is linked to relevant structures, contexts, and prior knowledge
* detect isolated or local-only judgment

Questions:

* Is this decision disconnected from relevant contexts?
* Are known relations missing?

---

#### BCDI — Branching Recognition & Case Differentiation Index

Purpose:

* measure case-splitting quality
* prevent false linearization

Questions:

* Are we seeing real branches?
* Are condition splits preserved?

---

#### RII — Reverse Inference Index

Purpose:

* infer hidden causes and updated rejection boundaries from results
* make rejection dynamic rather than fixed

Questions:

* What should have been rejected in hindsight?
* What boundary failed?
* What unseen variable must now be encoded?

---

#### HRI — Hypothesis Reframing Index

Purpose:

* evaluate the ability to transform failed or low-value framing into a better one

Questions:

* Can the architecture recover from wrong framing?
* Can it generate a better question after failure?

---

#### COCLI — Cognitive Climate Index

Purpose:

* determine whether judgment conditions are cognitively trustworthy

Questions:

* Is the decision climate overheated, brittle, noisy, fatigued, or under-structured?
* Should judgment be deferred because the climate is poor?

---

### 5.2 Recommended indicators

#### RDI — Reasoning Divergence Index

Measures diversity and structural integration across branches.

#### TRS — Total Resonant Score

Measures recovery, restoration, and meaningful continuity after decision or stress.

#### SCI — Structural Collapse Index

Measures collapse risk under concentrated fragility, poor questioning, and failed adaptation.

#### CDI — Concentration–Distribution Index

Measures whether attention, authority, or cognition is over-concentrated or over-dispersed.

---

### 5.3 Extended indicators

* CHD-related stabilization layers
* RAI
* AXI
* OSI
* NSI
* ESI-R

These are advanced meta-layers for reference stability, observer drift control, norm–reality inversion detection, and epistemic structure tracking.

---

## 6. Protocol Stack

### Protocol 1. Intake Normalization Protocol

Goal:
Turn raw issue into structured decision input.

Required fields:

* issue title
* decision objective
* time horizon
* constraints
* affected actors
* known facts
* unknowns
* expected risk
* previous related cases

Outputs:

* normalized issue object
* initial DoQ flag
* initial CCI flag

---

### Protocol 2. Question Density Gate Protocol

Goal:
Determine whether the issue deserves immediate judgment.

Decision logic:

* If DoQ is too low, do not force an answer.
* Route to:

  * Withhold
  * Observe More
  * Reframe

Outputs:

* pass
* hold
* reframe required

---

### Protocol 3. Branching Protocol

Goal:
Generate cases before converging.

Required branch types:

* best case
* worst case
* normal case
* constraint-dependent case
* low-cost pilot case
* reject case
* withhold case

Outputs:

* branch map
* branch count
* BCDI / RDI assessment

---

### Protocol 4. Rejection Boundary Protocol

Goal:
Define current reject conditions from history and present structure.

Sources:

* known collapse patterns
* known failure cases
* legal constraints
* ethical constraints
* operational fragility
* cognitive climate risk
* inverse inference from prior breakdowns

Outputs:

* reject conditions
* stop conditions
* escalation conditions
* dynamic boundary confidence

---

### Protocol 5. Silence / Withholding Protocol

Goal:
Determine whether non-decision creates higher information value.

Evaluation prompts:

* Will more time reveal hidden variables?
* Is immediate decision likely to produce false closure?
* Is current climate too unstable for trustworthy judgment?
* Does withholding increase expected structural quality?

Outputs:

* Withhold
* Observe More
* Proceed
* Reframe

---

### Protocol 6. Reframing Protocol

Goal:
Transform malformed or exhausted problem framing.

Reframing operations:

* shift time scale
* shift actor scale
* split binary
* decompose issue
* change metric
* invert objective
* replace question with a prior question

Outputs:

* reframed issue
* HRI delta
* new branch map

---

### Protocol 7. Execution Gate Protocol

Goal:
Decide action mode only after structural qualification.

Possible verdicts:

* EXECUTE
* PILOT
* HOLD
* REJECT
* CONTINUE OBSERVATION

Inputs:

* DoQ
* CCI
* BCDI
* RII
* HRI
* COCLI
* SCI
* TRS

Outputs:

* verdict
* confidence
* conditions to revisit

---

### Protocol 8. Post-Decision Learning Protocol

Goal:
Update architecture from outcomes.

Questions:

* What failed?
* What unexpectedly succeeded?
* Which branch was underweighted?
* Which reject boundary was missing?
* Was withholding too short or too long?
* Did reframing occur too late?

Outputs:

* updated rejection boundary
* updated withholding conditions
* updated reframing triggers
* new RII state

---

## 7. Decision Modes

LoPAS-DDA should not collapse every issue into binary yes/no.
The minimum decision set is:

1. **Accept**
2. **Reject**
3. **Withhold**
4. **Reframe**
5. **Observe More**
6. **Pilot**

This six-mode structure is essential.
Without it, the architecture regresses into premature closure.

---

## 8. Minimum Viable Implementation

### 8.1 Minimal indicator stack

* DoQ
* CCI
* BCDI
* RII
* HRI
* COCLI

### 8.2 Minimal protocol stack

* Intake Normalization
* Question Density Gate
* Branching
* Rejection Boundary
* Silence / Withholding
* Reframing
* Execution Gate
* Post-Decision Learning

### 8.3 Minimal outputs

#### Decision Card

Fields:

* issue_id
* issue_title
* current_question
* doq
* cci
* bcdi
* rii
* hri
* cocli
* reject_conditions
* withholding_conditions
* suggested_mode
* confidence
* revisit_trigger

#### Verdict Enum

* EXECUTE
* PILOT
* HOLD
* REFRAME
* REJECT
* OBSERVE_MORE

---

## 9. Difference from Standard AI Systems

### Standard systems tend to optimize:

* answer quality
* confidence calibration
* policy alignment
* desired output behavior

### LoPAS-DDA optimizes:

* question qualification
* judgment timing
* dynamic rejection learning
* strategic withholding
* reframing capacity
* decision climate fitness

In other words:

> Standard systems optimize what to output.
> LoPAS-DDA optimizes whether output should occur at all, under what conditions, and after what structural transformation.

---

## 10. Research Position

LoPAS-DDA does not claim that no related work exists.
There are partial overlaps with areas such as:

* abstention
* selective prediction
* uncertainty-aware systems
* metacognitive control
* active inference
* bounded rationality
* inhibition models

However, LoPAS-DDA proposes a distinct integration in which:

* withholding is a productive temporal function
* silence is a control layer
* rejection is dynamically updated through inverse inference
* question density is gated before answer generation
* cognitive climate determines judgment validity

This integrated framing constitutes its distinctive contribution.

---

## 11. Philosophical Claim

LoPAS-DDA implies a broader view of intelligence:

> Intelligence is not merely the ability to produce good answers.
> Intelligence is also the structured ability to delay, reject, remain silent, preserve uncertainty, and transform the question before closure.

This makes LoPAS-DDA not just a decision engine, but a proposal for a broader theory of judgment.

---

## 12. Future Extensions

Possible next specifications:

1. JSON Schema for Decision Card
2. API specification for evaluation endpoints
3. scoring bands for each indicator
4. enterprise meeting-reduction workflow
5. municipal observation workflow
6. research-agent implementation profile
7. human-AI joint deliberation protocol
8. rejection-boundary memory format
9. climate stabilization submodule
10. CHD-linked hallucination suppression layer

---

## 13. Decision Card JSON Schema (Draft v0.2)

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://lopas.dev/schema/decision-card-v0.2.json",
  "title": "LoPAS-DDA Decision Card",
  "type": "object",
  "required": [
    "issue_id",
    "issue_title",
    "current_question",
    "assessment",
    "decision",
    "timestamps",
    "version"
  ],
  "properties": {
    "issue_id": {
      "type": "string"
    },
    "issue_title": {
      "type": "string"
    },
    "current_question": {
      "type": "string"
    },
    "context": {
      "type": "object",
      "properties": {
        "time_horizon": {"type": "string"},
        "constraints": {
          "type": "array",
          "items": {"type": "string"}
        },
        "affected_actors": {
          "type": "array",
          "items": {"type": "string"}
        },
        "known_unknowns": {
          "type": "array",
          "items": {"type": "string"}
        }
      },
      "additionalProperties": false
    },
    "assessment": {
      "type": "object",
      "required": ["doq","cci","bcdi","rii","hri","cocli"],
      "properties": {
        "doq": {"type":"number","minimum":0,"maximum":100},
        "cci": {"type":"number","minimum":0,"maximum":100},
        "bcdi": {"type":"number","minimum":0,"maximum":100},
        "rii": {"type":"number","minimum":0,"maximum":100},
        "hri": {"type":"number","minimum":0,"maximum":100},
        "cocli": {"type":"number","minimum":0,"maximum":100},
        "optional": {
          "type":"object",
          "properties": {
            "rdi":{"type":"number"},
            "trs":{"type":"number"},
            "sci":{"type":"number"},
            "cdi":{"type":"number"}
          },
          "additionalProperties": false
        }
      },
      "additionalProperties": false
    },
    "branches": {
      "type": "array",
      "items": {
        "type":"object",
        "required":["branch_id","label","status"],
        "properties": {
          "branch_id":{"type":"string"},
          "label":{"type":"string"},
          "status":{
            "type":"string",
            "enum":["candidate","discarded","pilot","selected"]
          },
          "notes":{"type":"string"}
        },
        "additionalProperties": false
      }
    },
    "reject_conditions": {
      "type": "array",
      "items": {"type":"string"}
    },
    "withholding_conditions": {
      "type": "array",
      "items": {"type":"string"}
    },
    "revisit_triggers": {
      "type": "array",
      "items": {"type":"string"}
    },
    "decision": {
      "type": "object",
      "required": ["verdict","confidence"],
      "properties": {
        "verdict": {
          "type":"string",
          "enum":[
            "EXECUTE",
            "PILOT",
            "HOLD",
            "REFRAME",
            "REJECT",
            "OBSERVE_MORE"
          ]
        },
        "confidence": {
          "type":"number",
          "minimum":0,
          "maximum":1
        },
        "rationale": {"type":"string"}
      },
      "additionalProperties": false
    },
    "learning": {
      "type":"object",
      "properties": {
        "boundary_update_required":{"type":"boolean"},
        "rii_update_pending":{"type":"boolean"},
        "notes":{"type":"string"}
      },
      "additionalProperties": false
    },
    "timestamps": {
      "type":"object",
      "required":["created_at"],
      "properties": {
        "created_at":{"type":"string","format":"date-time"},
        "review_at":{"type":"string","format":"date-time"}
      },
      "additionalProperties": false
    },
    "version": {
      "type":"string"
    }
  },
  "additionalProperties": false
}
```

### Minimal Example

```json
{
  "issue_id":"case-001",
  "issue_title":"Medication queue overload",
  "current_question":"Should demand distribution be piloted?",
  "assessment":{
    "doq":74,
    "cci":68,
    "bcdi":71,
    "rii":62,
    "hri":66,
    "cocli":72
  },
  "reject_conditions":["single-point staffing overload"],
  "withholding_conditions":["need 7 more days observation"],
  "decision":{
    "verdict":"PILOT",
    "confidence":0.73
  },
  "timestamps":{
    "created_at":"2026-04-20T10:00:00Z"
  },
  "version":"0.2"
}
```

## 14. /v1/evaluate API Specification (Draft v0.3)

### Endpoint

```http
POST /v1/evaluate
Content-Type: application/json
```

Purpose:
Evaluate an issue through LoPAS-DDA and return a structured Decision Card verdict.

---

## Request Schema

```json
{
  "issue": {
    "issue_id": "case-001",
    "issue_title": "Medication queue overload",
    "current_question": "Should demand distribution be piloted?"
  },
  "context": {
    "time_horizon": "30d",
    "constraints": ["limited staffing"],
    "affected_actors": ["patients","clinic"],
    "known_unknowns": ["true demand variability"]
  },
  "assessment": {
    "doq": 74,
    "cci": 68,
    "bcdi": 71,
    "rii": 62,
    "hri": 66,
    "cocli": 72,
    "optional": {
      "rdi": 64,
      "trs": 70,
      "sci": 28,
      "cdi": 61
    }
  },
  "branches": [
    {
      "branch_id":"b1",
      "label":"pilot staggered hours",
      "status":"candidate"
    }
  ],
  "version":"0.3"
}
```

---

## Response Schema

```json
{
  "decision_card": {
    "issue_id":"case-001",
    "decision": {
      "verdict":"PILOT",
      "confidence":0.74,
      "rationale":"Question density sufficient; rejection boundary excludes full rollout."
    },
    "reject_conditions":[
      "single-point staffing overload"
    ],
    "withholding_conditions":[
      "observe one additional weekly cycle before scale-up"
    ],
    "revisit_triggers":[
      "queue length exceeds threshold",
      "demand variance shifts materially"
    ],
    "learning": {
      "boundary_update_required":false,
      "rii_update_pending":false
    }
  },
  "engine": {
    "policy_path":"branching->judgment->pilot",
    "version":"0.3"
  }
}
```

---

## Minimal Evaluation Logic (Reference)

Illustrative baseline (not mandatory):

```text
if doq < 40:
  verdict = REFRAME

else if cocli < 35:
  verdict = HOLD

else if sci > 70:
  verdict = REJECT

else if bcdi < 45:
  verdict = OBSERVE_MORE

else if rii < 50:
  verdict = PILOT

else:
  verdict = EXECUTE
```

This is intentionally minimal and replaceable.
Real policy logic may use weighted or stateful evaluation.

---

## Error Response

```json
{
  "error": {
    "code":"INVALID_INPUT",
    "message":"Required field assessment.doq missing"
  }
}
```

Possible error codes:

* INVALID_INPUT
* OUT_OF_RANGE_SCORE
* INSUFFICIENT_DOQ
* CLIMATE_UNSTABLE
* POLICY_UNRESOLVED

---

## Cloudflare Worker Skeleton (Minimal)

```javascript
export default {
  async fetch(req) {
    if (req.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const body = await req.json();
    const a = body.assessment;

    let verdict = 'EXECUTE';

    if (a.doq < 40) verdict = 'REFRAME';
    else if (a.cocli < 35) verdict = 'HOLD';
    else if (a.optional?.sci > 70) verdict = 'REJECT';
    else if (a.bcdi < 45) verdict = 'OBSERVE_MORE';
    else if (a.rii < 50) verdict = 'PILOT';

    return Response.json({
      decision_card: {
        issue_id: body.issue.issue_id,
        decision: {
          verdict,
          confidence: 0.70
        }
      },
      engine: {
        version: '0.3'
      }
    });
  }
}
```

---

## Future Endpoints

Potential extensions:

```http
POST /v1/evaluate
POST /v1/reframe
POST /v1/reject-boundary/update
POST /v1/session/start
GET  /v1/session/{id}
```

---

## 15. Closing Statement

LoPAS-DDA is an architecture for decisions that do not confuse speed with wisdom.
It is designed for environments where:

* premature certainty is dangerous
* poor questions waste cognition
* rejection must evolve through experience
* silence can be more truthful than output
* the climate of thought shapes what judgment can validly become

It is therefore best understood as:

**a deliberative architecture for dynamic judgment under uncertainty.**

