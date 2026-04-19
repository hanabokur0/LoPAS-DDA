export default {
  async fetch(req) {

    if (req.method !== 'POST') {
      return new Response(
        'Method Not Allowed',
        { status: 405 }
      );
    }

    const body = await req.json();

    const a = body.assessment;

    let verdict = 'EXECUTE';

    if (a.doq < 25)
      verdict = 'REFRAME';

    else if (a.doq < 40)
      verdict = 'OBSERVE_MORE';

    else if (a.cocli < 35)
      verdict = 'HOLD';

    else if ((a.optional?.sci ?? 0) > 70)
      verdict = 'REJECT';

    else if (a.bcdi < 45)
      verdict = 'OBSERVE_MORE';

    else if (a.rii < 50)
      verdict = 'PILOT';

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
