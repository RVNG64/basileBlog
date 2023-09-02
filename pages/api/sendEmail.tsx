import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, text, html) => {
  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    debug: true,  // Activer le débogage
    logger: true, // Log les informations de débogage à la console
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let htmlContent = `
  <div style="font-family: Poppins, sans-serif; color: #000; padding: 20px; text-align: justify;">
    <h1 style="color: #000; font-family: Sora, sans-serif;">Bienvenue chez Basile!</h1>
    <p><strong>Félicitations</strong> ! <br /> <br />
    Vous êtes maintenant inscrit à notre newsletter.</p>
    <p>Nous sommes ravis de vous avoir parmi nous et nous avons hâte de partager avec vous nos dernières actualités.</p>
    <p>À très bientôt,</p>
    <p><strong>Basile et son équipe</strong></p>
    <h1 style="color: #000; font-family: Sora, sans-serif;">Basile</h1>
  </div>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    text: text,
    html: html,
  };

  return transporter.sendMail(mailOptions);
};

export default sendEmail;
