export const runtime = 'nodejs';

const requiredFields = ['name', 'phone', 'city', 'productType', 'projectType'] as const;

function clean(value: unknown, maxLength = 600) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character] || character);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    if (clean(body.website)) return Response.json({ ok: true });

    const data = {
      name: clean(body.name, 100),
      phone: clean(body.phone, 50),
      city: clean(body.city, 100),
      productType: clean(body.productType, 100),
      projectType: clean(body.projectType, 100),
      openings: clean(body.openings, 50) || 'Not provided',
      details: clean(body.details, 1200) || 'Not provided',
    };

    if (requiredFields.some((field) => !data[field])) {
      return Response.json({ message: 'Please complete all required fields.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json({ message: 'Email delivery is being configured. Please send your enquiry on WhatsApp for now.' }, { status: 503 });
    }

    const to = process.env.QUOTE_TO_EMAIL || 'thecrosslinesgroup28@gmail.com';
    const from = process.env.QUOTE_FROM_EMAIL || 'The Crosslines Website <onboarding@resend.dev>';
    const rows = [
      ['Name', data.name], ['Phone / WhatsApp', data.phone], ['City', data.city], ['Product', data.productType],
      ['Project type', data.projectType], ['Approximate openings', data.openings], ['Details', data.details],
    ];

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `New website enquiry — ${data.name}, ${data.city}`,
        html: `<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#211f1b"><h1 style="font-size:28px">New Crosslines enquiry</h1>${rows.map(([label, value]) => `<p style="border-top:1px solid #ddd5c8;padding:12px 0;margin:0"><strong>${escapeHtml(label)}</strong><br>${escapeHtml(value)}</p>`).join('')}</div>`,
        text: rows.map(([label, value]) => `${label}: ${value}`).join('\n'),
      }),
    });

    if (!response.ok) {
      return Response.json({ message: 'The enquiry could not be sent. Please use WhatsApp instead.' }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ message: 'The enquiry could not be sent. Please use WhatsApp instead.' }, { status: 500 });
  }
}
