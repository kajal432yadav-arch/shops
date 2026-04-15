const express = require('express');
const router = express.Router();
const sendConfirmationEmail = require('../utils/mailer');

// Route to handle checkout and send real email
router.post('/checkout', async (req, res) => {
  const { email, orderId } = req.body;

  try {
    // 1. Process Order here (Database logic)
    
    // 2. Send real confirmation email
    const emailSent = await sendConfirmationEmail(email, orderId);

    if (emailSent) {
      res.status(200).json({ success: true, message: 'Real email sent successfully!' });
    } else {
      res.status(500).json({ success: false, message: 'Failed to send real email. Check server logs.' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error during checkout.' });
  }
});

module.exports = router;
