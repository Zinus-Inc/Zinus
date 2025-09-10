const express = require('express');
const router = express.Router();
const axios = require('axios');
const { isProduction } = require('../utils/index');
const { sendHTMLEmail } = require('../utils/email');

router.post('/:contactRoute', async (req, res) => {
  try {
    const { captchaToken, email: customerEmail } = req.body;

    if (!captchaToken || !customerEmail) {
      throw new Error('No captcha or email provided.');
    }

    delete req.body.email;
    delete req.body.captchaToken;

    try {
      await axios.post('https://hcaptcha.com/siteverify', {
        secret: process.env.HCAPTCHA_SECRET,
        response: captchaToken
      });
    } catch (err) {
      throw new Error(err);
    }

    const originStoreUrl = req.header('Origin').split('www.')[1];
    const { contactRoute } = req.params;

    let toEmail;
    let emailSubject;

    const SUPPORT_EMAIL = 'support@zinusinc.com';
    switch (contactRoute) {
      case 'support':
        toEmail = SUPPORT_EMAIL;
        emailSubject = 'Support request';
        break;

      case 'warranty':
        toEmail = SUPPORT_EMAIL;
        emailSubject = 'Warranty registration';
        break;

      default:
        throw new Error('Contact route is not valid.');
    }

    // Locale Contacts
    switch (originStoreUrl) {
      case 'zinus.jp':
        toEmail = 'customerservice-jp@zinus.com';
        break;
      case 'zinus.com.au':
        toEmail = 'australianorders@zinus.com';
        break;
      case 'zinus.fr':
      case 'zinus.com.de':
      case 'zinus.co.uk':
        toEmail = 'eusupport@zinus.com'
        break;
    }
    

    // Set test email to dev if not production env
    if (!isProduction) toEmail = 'gabe@zinusinc.com';

    // Format attachments accordingly for nodemailer
    const attachments =
      req.files &&
      req.files.file &&
      req.files.file.length &&
      req.files.file.map((item) => {
        return {
          filename: item.originalname,
          content: item.buffer
        };
      });

    const bodyLines = Object.keys(req.body).map((key) => {
      return `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong></p> <p>${
        req.body[key]
      }</p>`;
    });

    await sendHTMLEmail({
      toEmail: toEmail,
      replyToEmail: customerEmail,
      emailSubject: `${emailSubject} - ${originStoreUrl}`,
      html: bodyLines.join('<br />'),
      attachments
    });

    return res.send('Success. Email sent successfully!');
  } catch (err) {
    console.error(err.message);
    return res.status(400).send('Most likely something incorrectly configured.');
  }
});

module.exports = router;
