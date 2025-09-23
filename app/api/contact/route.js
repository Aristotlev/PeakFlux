import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email to business
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [process.env.BUSINESS_EMAIL || 'ariscsc@gmail.com'], // Your business email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e, #16213e); color: white; border-radius: 15px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(139, 95, 255, 0.3)); padding: 2rem; text-align: center; border-bottom: 2px solid rgba(0, 255, 255, 0.4);">
            <h1 style="margin: 0; color: #00ffff; text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);">New Contact Form Submission</h1>
            <p style="margin: 0.5rem 0 0 0; color: rgba(255, 255, 255, 0.8);">Peakflux Marketing Website</p>
          </div>
          
          <div style="padding: 2rem;">
            <div style="background: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 10px; border: 1px solid rgba(0, 255, 255, 0.3); margin-bottom: 1.5rem;">
              <h2 style="color: #00ffff; margin-top: 0; text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);">Contact Details</h2>
              <p style="margin: 0.5rem 0;"><strong style="color: rgba(0, 255, 255, 0.8);">Name:</strong> ${name}</p>
              <p style="margin: 0.5rem 0;"><strong style="color: rgba(0, 255, 255, 0.8);">Email:</strong> ${email}</p>
              <p style="margin: 0.5rem 0;"><strong style="color: rgba(0, 255, 255, 0.8);">Subject:</strong> ${subject}</p>
            </div>
            
            <div style="background: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 10px; border: 1px solid rgba(0, 255, 255, 0.3);">
              <h2 style="color: #00ffff; margin-top: 0; text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);">Message</h2>
              <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="background: rgba(0, 255, 255, 0.1); padding: 1rem; text-align: center; border-top: 1px solid rgba(0, 255, 255, 0.3);">
            <p style="margin: 0; color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">
              Sent from Peakflux Marketing contact form on ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission - Peakflux Marketing

Contact Details:
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent on: ${new Date().toLocaleString()}
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'Peakflux Marketing <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for contacting Peakflux Marketing',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e, #16213e); color: white; border-radius: 15px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(139, 95, 255, 0.3)); padding: 2rem; text-align: center; border-bottom: 2px solid rgba(0, 255, 255, 0.4);">
            <h1 style="margin: 0; color: #00ffff; text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);">Thank You!</h1>
            <p style="margin: 0.5rem 0 0 0; color: rgba(255, 255, 255, 0.8);">Peakflux Marketing</p>
          </div>
          
          <div style="padding: 2rem;">
            <p style="font-size: 1.1rem; line-height: 1.6;">Hi ${name},</p>
            <p style="line-height: 1.6;">Thank you for reaching out to us! We've received your message and will get back to you within 24 hours.</p>
            
            <div style="background: rgba(0, 0, 0, 0.3); padding: 1.5rem; border-radius: 10px; border: 1px solid rgba(0, 255, 255, 0.3); margin: 1.5rem 0;">
              <h3 style="color: #00ffff; margin-top: 0; text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);">Your Message Summary</h3>
              <p style="margin: 0.5rem 0;"><strong style="color: rgba(0, 255, 255, 0.8);">Subject:</strong> ${subject}</p>
              <p style="margin: 0.5rem 0; opacity: 0.8;">We'll respond to: ${email}</p>
            </div>
            
            <p style="line-height: 1.6;">In the meantime, feel free to explore our services and follow us on social media for the latest updates.</p>
            <p style="line-height: 1.6;">Best regards,<br><strong style="color: #00ffff;">The Peakflux Marketing Team</strong></p>
          </div>
          
          <div style="background: rgba(0, 255, 255, 0.1); padding: 1rem; text-align: center; border-top: 1px solid rgba(0, 255, 255, 0.3);">
            <p style="margin: 0; color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
      text: `
Hi ${name},

Thank you for reaching out to Peakflux Marketing! We've received your message and will get back to you within 24 hours.

Your Message Summary:
Subject: ${subject}
We'll respond to: ${email}

In the meantime, feel free to explore our services and follow us on social media for the latest updates.

Best regards,
The Peakflux Marketing Team

---
This is an automated response. Please do not reply to this email.
      `
    });

    return NextResponse.json(
      { message: 'Email sent successfully', id: data.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
