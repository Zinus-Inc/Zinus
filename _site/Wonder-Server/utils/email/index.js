const nodemailer = require('nodemailer');
const axios = require('axios');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: 'web-notifications@zinusinc.com',
    pass: process.env.GMAIL_PASSWORD
  }
});

/**
 * @param {Object} options about your email request
 * @param {String} options.toEmail The email you're sending to
 * @param {String} options.replyToEmail The email you're sending from
 * @param {String} options.emailSubject The email subject
 * @param {String} options.html The HTML of the email
 * @param {Array} options.attachments The email attachments
 * @param {Boolean} options.attachACat The HTML of the email
 */
exports.sendHTMLEmail = async (options) => {
  try {
    const info = await transporter.sendMail({
      from: '"Zinus Robot 🤖" <noreply@zinusinc.com>',
      replyTo: options.replyToEmail,
      to: options.toEmail,
      subject: options.emailSubject,
      html: options.attachACat ? options.html + (await this.getCatImage()) : options.html,
      attachments: options.attachments || []
    });

    return info.messageId;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCatImage = async () => {
  try {
    const catPicture = await axios.get(
      `https://api.thecatapi.com/v1/images/search?api_key=${process.env.CAT_API_KEY}`
    );

    return `<br> <p>As a way to say thank you, here's a cat :)</p> <img src="${catPicture.data[0].url}">`;
  } catch (err) {
    return '<br> As a thank you, here in a cat emoji: 😺. I had trouble getting a picture this time around :(';
  }
};
