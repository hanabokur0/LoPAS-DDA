# Evaluate API Specification v0.3

## Endpoint

```http
POST /v1/evaluate
Content-Type: application/json
```

Purpose:

Evaluate an issue through LoPAS-DDA and return a structured Decision Card verdict.

---

## Request Structure

A request contains:

1. issue

2. context

3. assessment

4. branches (optional)

5. version

---

## Request Example

```json
{
  "issue": {
    "issue_id":"case-001",
    "issue_title":"Medication queue overload",
    "current_question":"Should demand distribution be piloted?"
  },

  "context": {

    "time_horizon":"30d",

    "constraints":[
      "limited staffing"
    ],

    "affected_actors":[
      "patients",
      "clinic"
    ],

    "known_unknowns":[
      "true demand variability"
    ]

  },

  "assessment": {

    "doq":74,
    "cci":68,
    "bcdi":71,
    "rii":62,
    "hri":66,
    "cocli":72,

    "optional": {

      "rdi":64,
      "trs":70,
      "sci":28,
      "cdi":61

    }

  },

  "branches":[

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

## Response Structure

A response returns:

- decision_card

- engine

---

## Response Example

```json
{
  "decision_card": {

    "issue_id":"case-001",

    "decision": {

      "verdict":"PILOT",

      "confidence":0.74,

      "rationale":
      "Question density sufficient; rejection boundary excludes full rollout."

    },

    "reject_conditions":[

      "single-point staffing overload"

    ],

    "withholding_conditions":[

      "observe one additional weekly cycle before scale-up"

    ],

    "revisit_triggers":[

      "queue length exceeds threshold"

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

## Minimal Evaluation Logic

Illustrative baseline:

```text
If DoQ < 25
→ REFRAME

If 25 <= DoQ < 40
→ OBSERVE_MORE

If COCLI < 35
→ HOLD

If SCI > 70
→ REJECT

If BCDI < 45
→ OBSERVE_MORE

If RII < 50
→ PILOT

Else
→ EXECUTE
```

---

## Error Response

```json
{
  "error":{

    "code":"INVALID_INPUT",

    "message":
    "Required field assessment.doq missing"

  }
}
```

---

## Error Codes

```text
INVALID_INPUT

OUT_OF_RANGE_SCORE

INSUFFICIENT_DOQ

CLIMATE_UNSTABLE

POLICY_UNRESOLVED
```

---

## Cloudflare Worker Minimal Reference

```javascript
export default {

 async fetch(req){

  if(req.method !== 'POST'){
   return new Response(
    'Method Not Allowed',
    {status:405}
   );
  }

  const body = await req.json();

  const a = body.assessment;

  let verdict='EXECUTE';

  if(a.doq < 25)
   verdict='REFRAME';

  else if(a.doq < 40)
   verdict='OBSERVE_MORE';

  else if(a.cocli < 35)
   verdict='HOLD';

  else if((a.optional?.sci ?? 0) > 70)
   verdict='REJECT';

  else if(a.bcdi < 45)
   verdict='OBSERVE_MORE';

  else if(a.rii < 50)
   verdict='PILOT';

  return Response.json({

   decision_card:{

    issue_id:body.issue.issue_id,

    decision:{
      verdict,
      confidence:0.70
    }

   },

   engine:{
    version:'0.3'
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

GET /v1/session/{id}
```

---

## Relationship to v0.2

v0.2 defined:

Decision Card structure.

v0.3 defines:

how that structure moves through API evaluation.

---

## Relationship to v0.4

v0.4 extends:

verdict

into

state transitions.

---

## Result

v0.3 defines

the minimum evaluation interface

for LoPAS-DDA.
