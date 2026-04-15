const nodemailer = require('nodemailer');

const sendConfirmationEmail = async (userEmail, orderId) => {
  try {
    let transporter;

    // If you haven't set EMAIL_USER, we'll create a real Test Account for you
    if (!process.env.EMAIL_USER) {
      console.log("No credentials found. Creating a FREE test mail account...");
      let testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, 
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    } else {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
    }

    const mailOptions = {
      from: '"ShopVerse Luxury" <no-reply@shopverse.com>',
      to: userEmail,
      subject: `Order Confirmed! Your Booking #SV-${orderId} is successful`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; background: #f7fee7;">
          <h2 style="color: #84cc16;">Thank you for your ShopVerse Purchase!</h2>
          <p>Hi there,</p>
          <p>Your order <strong>#SV-${orderId}</strong> has been successfully placed. Your electronic receipt is below.</p>
          <div style="background: #ffffff; padding: 15px; border-radius: 8px;">
            <p><strong>Order Summary:</strong></p>
            <p>Order ID: <b>SV-${orderId}</b></p>
            <p>Status: <span style="color: #84cc16;">Paid & Confirmed</span></p>
          </div>
          <p>We will notify you once your products are on their way!</p>
          <br>
          <p>Best Regards,<br><strong>The ShopVerse Team</strong></p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    
    // IF USING TEST ACCOUNT: Output the link to see the real email
    if (!process.env.EMAIL_USER) {
      console.log("-----------------------------------------");
      console.log("✅ REAL EMAIL GENERATED!");
      console.log("Preview URL: " + nodemailer.getTestMessageUrl(info));
      console.log("-----------------------------------------");
    }
    
    return true;
  } catch (error) {
    console.error("Email Error: ", error);
    return false;
  }
};

module.exports = sendConfirmationEmail;
