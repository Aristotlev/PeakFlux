const { Resend } = require('resend');

// Initialize Resend with your API key
const resend = new Resend('re_GMB5trN7_GRH8PADU1ChBdQMzuFJyLVv4');

async function sendTestEmail() {
  try {
    console.log('Sending test email...');
    
    const { data, error } = await resend.emails.send({
      from: 'Peakflux Marketing <onboarding@resend.dev>', // Using Resend's test domain
      to: ['ariscsc@gmail.com'],
      subject: 'Test Email from Peakflux Marketing',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; text-align: center;">Peakflux Marketing Test Email</h1>
          <p>Hello!</p>
          <p>This is a test email sent using the Resend API from your Peakflux Marketing project.</p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            <strong>Test Details:</strong><br>
            • Sent from: Peakflux Marketing<br>
            • Date: ${new Date().toLocaleString()}<br>
            • API: Resend
          </p>
          <p>If you received this email, your Resend integration is working correctly!</p>
          <p>Best regards,<br>Peakflux Marketing Team</p>
        </div>
      `,
      text: `
        Peakflux Marketing Test Email
        
        Hello!
        
        This is a test email sent using the Resend API from your Peakflux Marketing project.
        
        Test Details:
        - Sent from: Peakflux Marketing
        - Date: ${new Date().toLocaleString()}
        - API: Resend
        
        If you received this email, your Resend integration is working correctly!
        
        Best regards,
        Peakflux Marketing Team
      `
    });

    if (error) {
      console.error('Error sending email:', error);
      return;
    }

    console.log('✅ Email sent successfully!');
    console.log('Email ID:', data.id);
    console.log('Email details:', data);
    
  } catch (error) {
    console.error('❌ Failed to send email:', error.message);
  }
}

// Run the test
sendTestEmail();
