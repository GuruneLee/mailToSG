const nodemailer = require("nodemailer");

const oauthInfo = require("../config/oauth.json");
const recieverInfo = require("../config/recieverInfo.json");
const mailGenerator = require("./contentGenerator");

// options
const transporterOptions = async () => {
  return {
    service: "gmail",
    port: 587,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      type: "OAuth2",
      user: oauthInfo.OAUTH_USER,
      clientId: oauthInfo.OAUTH_CLIENT_ID,
      clientSecret: oauthInfo.OAUTH_CLIENT_SECRET,
      refreshToken: oauthInfo.OAUTH_REFRESH_TOKEN,
    },
  };
};

const mailOptions = async () => {
  return {
    from: oauthInfo.OAUTH_USER,
    to: recieverInfo.user,
    subject: mailGenerator.subject,
    html: await mailGenerator.generate(),
  };
};

// 메일발송 객체
module.exports = mailSender = {
  // 메일발송 함수
  async sendGmail() {
    const transporter = nodemailer.createTransport(await transporterOptions());
    transporter.sendMail(await mailOptions(), function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },
};
