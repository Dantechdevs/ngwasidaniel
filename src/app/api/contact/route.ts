import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// ─────────────────────────────────────────────
// HOW TO SET THIS UP (free, no request caps, no third party)
// 1. Turn on 2-Step Verification on the Google account that owns
//    damnngwasi@gmail.com: https://myaccount.google.com/security
// 2. Go to https://myaccount.google.com/apppasswords
// 3. Create an App Password (name it "portfolio-contact-form")
//    Google gives you a 16-character code like: abcd efgh ijkl mnop
// 4. In your Vercel project: Settings → Environment Variables, add:
//      GMAIL_USER = damnngwasi@gmail.com
//      GMAIL_APP_PASSWORD = the 16-character code (no spaces)
// 5. Redeploy. Never put the App Password directly in this file or
//    commit it to git — env vars keep it out of your source code.
// ─────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const GMAIL_USER = process.env.GMAIL_USER
    const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      console.error('Gmail credentials are not set — add GMAIL_USER and GMAIL_APP_PASSWORD in Vercel env vars')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
    })

    await transporter.sendMail({
      from: `"${name} (via portfolio)" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `New message from your portfolio:\n\nName: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px;">
          <h2 style="color: #5b4fcf;">New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form send error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}