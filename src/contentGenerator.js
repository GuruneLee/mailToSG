const fs = require("fs").promises;
const path = require("path");

const mailContent = require("../config/mailContent.json");
const beginTime = mailContent.timeAtWork;
const appliedDate = mailContent.appliedDate;
const senderName = require("../config/senderInfo.json").name;

String.prototype.insertData = function ({
  appliedDate,
  senderName,
  beginTime,
}) {
  return this.replaceAll(
    "<!--applied-date-->",
    `<span id=\"applied-date\">${appliedDate}</span>`
  )
    .replaceAll(
      "<!--sender-name-->",
      `<span id=\"sender-name\">${senderName}</span>`
    )
    .replaceAll(
      "<!--begin-time-->",
      `<span id=\"begin-time\">${beginTime}</span>`
    );
};

module.exports = genMailBody = {
  // generate mail body
  async generate() {
    let mailBody = await fs.readFile(
      path.resolve("./src/template", "default-template.html")
    );
    return mailBody.toString().insertData({
      appliedDate,
      senderName,
      beginTime,
    });
  },
};
