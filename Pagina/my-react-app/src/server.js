const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { nombre, apellidos, correo, comentario } = req.body;

  // Set up the nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Set up the email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'palacioslagunamanuel@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Nombre: ${nombre} ${apellidos}\nEmail: ${correo}\nComment: ${comentario}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});