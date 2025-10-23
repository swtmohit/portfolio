import { NextRequest, NextResponse } from 'next/server';

// Force Node.js runtime so nodemailer (which relies on Node APIs) runs correctly on the server.
export const runtime = 'nodejs';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Ensure email credentials are available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('EMAIL_USER and EMAIL_PASS must be set in environment');
      return NextResponse.json({ error: 'Email credentials not configured' }, { status: 500 });
    }


    // Create transporter (nodemailer uses createTransport)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter configuration before sending (helps catch auth/network errors early)
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('Nodemailer verify failed:', verifyError);
      return NextResponse.json({ error: 'Email configuration verification failed' }, { status: 500 });
    }

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 3px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
    };

    // Send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
    } catch (sendError) {
      console.error('Error in transporter.sendMail:', sendError);
      // Return a concise message to the client but log the full error server-side
      return NextResponse.json({ error: 'Failed to send email (SMTP error)' }, { status: 500 });
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Lightweight health-check / connectivity test for the contact API
  return NextResponse.json({ ok: true }, { status: 200 });
}
