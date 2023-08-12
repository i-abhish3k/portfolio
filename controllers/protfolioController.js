var nodemailer = require("nodemailer");
var sendGirdTransport = require("nodemailer-sendgrid-transport");

// transport mailer
const transpoter = nodemailer.createTransport(
  sendGirdTransport({
    auth: {
      api_key: process.env.API_SENDGRID, // your send grid Key here
    },
  })
);

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;
    // validation
    if (!email || !msg || !name) {
      return res.status(500).send({
        success: false,
        message: "Please provide all required fields",
        error,
      });
    }
    // email matter
    transpoter.sendMail({
      to: "i.abhishek8899@gmail.com",
      from: "i.abhishek8899@gmail.com",
      subject: "Regarding MERN Portfolio App",
      html: `
      <h5>Detail Information</h5>
      <ul>
      <li><p>Name: ${name}</p></li>
      <li><p>Email: ${email}</p></li>
      <li><p>Message: ${msg}</p></li>
      </ul>
      `,
    });

    return res.status(200).send({
      success: true,
      message: "Your Message Send Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
