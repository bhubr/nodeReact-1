"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(data) {

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "chatoncamionvaguelette@gmail.com",
      pass: ",;:=1234"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Toto le haricot" <chatoncamionvaguelette@gmail.com>', // sender address
    to: "benoit.hubert@wildcodeschool.fr", // list of receivers
    subject: "YOLO", // Subject line
    text: "Hello dear Santa, please send me my gift = ", // plain text body
    html: data // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  return true;
}
module.exports = main;
