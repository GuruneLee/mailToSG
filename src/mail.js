const nodemailer = require("nodemailer");

const senderInfo = require("../config/senderInfo.json");
const recieverInfo = require("../config/recieverInfo.json");
const mailGenerator = require("./contentGenerator");

// options
const transporterOptions = async () => {
  return {
    service: "gmail",
    prot: 465,
    host: "smtp.gmail.com",
    secure: false,
    requireTLS: false,
    auth: {
      user: senderInfo.user,
      pass: senderInfo.pass,
    },
  };
};

const mailOptions = async () => {
  return {
    from: senderInfo.user,
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
