import nodemailer from 'nodemailer';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

export const runtime = 'nodejs';

const requiredFields = ['name', 'phone', 'city', 'productType', 'projectType'] as const;

type EnquiryData = {
  name: string;
  phone: string;
  city: string;
  productType: string;
  projectType: string;
  openings: string;
  details: string;
};

function clean(value: unknown, maxLength = 600) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character] || character);
}

function buildEnquiryEmail(data: EnquiryData) {
  const rows: [string, string][] = [
    ['Name', data.name],
    ['Phone / WhatsApp', data.phone],
    ['City', data.city],
    ['Product', data.productType],
    ['Project type', data.projectType],
    ['Approximate openings', data.openings],
    ['Details', data.details],
  ];

  const logoUrl = `${SITE_URL}/brand/crosslines-mark.png`;
  const fieldRows = rows
    .map(
      ([label, value], index) => `
        <tr>
          <td style="padding:18px 0;${index === 0 ? '' : 'border-top:1px solid #dcd5c8;'}">
            <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#9a7738;">
              ${escapeHtml(label)}
            </p>
            <p style="margin:0;font-size:16px;line-height:1.55;color:#211f1b;white-space:pre-wrap;">
              ${escapeHtml(value)}
            </p>
          </td>
        </tr>`,
    )
    .join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New Crosslines enquiry</title>
</head>
<body style="margin:0;padding:0;background:#f7f4ed;color:#211f1b;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f4ed;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;background:#fbfaf6;border:1px solid #dcd5c8;border-radius:24px;overflow:hidden;">
          <tr>
            <td style="padding:28px 32px 24px;background:#211f1b;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="middle" width="56">
                    <img src="${logoUrl}" width="48" height="48" alt="${escapeHtml(SITE_NAME)}" style="display:block;border-radius:999px;border:1px solid #d0ae6a;" />
                  </td>
                  <td valign="middle" style="padding-left:14px;">
                    <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.19em;text-transform:uppercase;color:#d0ae6a;">
                      Website enquiry
                    </p>
                    <p style="margin:6px 0 0;font-size:20px;font-weight:600;letter-spacing:-0.03em;color:#fbfaf6;">
                      ${escapeHtml(SITE_NAME)}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 32px 8px;background:#eee6d5;">
              <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.19em;text-transform:uppercase;color:#9a7738;">
                New lead
              </p>
              <h1 style="margin:0;font-size:34px;line-height:1.05;font-weight:600;letter-spacing:-0.04em;color:#211f1b;">
                ${escapeHtml(data.name)}
              </h1>
              <p style="margin:12px 0 0;font-size:15px;line-height:1.55;color:#6f6a61;">
                ${escapeHtml(data.productType)} · ${escapeHtml(data.city)} · ${escapeHtml(data.projectType)}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 28px;background:#eee6d5;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:12px 18px;background:#211f1b;border-radius:999px;">
                    <a href="https://wa.me/${data.phone.replace(/\D/g, '')}" style="font-size:13px;font-weight:600;color:#fbfaf6;text-decoration:none;">
                      Reply on WhatsApp
                    </a>
                  </td>
                  <td width="10"></td>
                  <td style="padding:12px 18px;background:#fbfaf6;border:1px solid #dcd5c8;border-radius:999px;">
                    <a href="tel:${escapeHtml(data.phone)}" style="font-size:13px;font-weight:600;color:#211f1b;text-decoration:none;">
                      Call ${escapeHtml(data.phone)}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 36px;background:#fbfaf6;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                ${fieldRows}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 32px;background:#f7f4ed;border-top:1px solid #dcd5c8;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:#6f6a61;">
                Sent from the ${escapeHtml(SITE_NAME)} website contact form ·
                <a href="${SITE_URL}/contact" style="color:#9a7738;text-decoration:none;">thecrosslinesgroup.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    `New ${SITE_NAME} website enquiry`,
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    `Source: ${SITE_URL}/contact`,
  ].join('\n');

  return { html, text };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    if (clean(body.website)) return Response.json({ ok: true });

    const data: EnquiryData = {
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

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    if (!gmailUser || !gmailAppPassword || gmailAppPassword === 'replace_with_your_gmail_app_password') {
      return Response.json(
        { message: 'Email delivery is being configured. Please send your enquiry on WhatsApp for now.' },
        { status: 503 },
      );
    }

    const to = process.env.QUOTE_TO_EMAIL || gmailUser;
    const from = process.env.QUOTE_FROM_EMAIL || gmailUser;
    const { html, text } = buildEnquiryEmail(data);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword.replace(/\s+/g, ''),
      },
    });

    await transporter.sendMail({
      from: `${SITE_NAME} Website <${from}>`,
      to,
      subject: `New website enquiry — ${data.name}, ${data.city}`,
      text,
      html,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ message: 'The enquiry could not be sent. Please use WhatsApp instead.' }, { status: 500 });
  }
}
