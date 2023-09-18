const nodemailer = require("nodemailer");
var HTMLParser = require("node-html-parser");

const path = require("path");
const { readFile } = require("./fileProcesses");

const sendMail = async (error) => {
  console.log(path.resolve(__dirname, "template.html"));
  let template = await readFile(path.resolve(__dirname, "./template.html"));

  var transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_KEY,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  console.log(template);

  var root = HTMLParser.parse(template);
  const informationDiv = root.getElementById("information");
  informationDiv.innerText = error;

  var mailOptions = {
    from: process.env.MAIL_ADDRESS,
    to: process.env.MAIL_ADDRESS,
    subject: `Service is Down`,

    html: root.toString(),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendMail };
