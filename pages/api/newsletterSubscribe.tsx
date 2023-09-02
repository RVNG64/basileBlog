import mongoose from 'mongoose';
import sendEmail from './sendEmail';
import validator from 'validator';

const NewsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Newsletter = mongoose.models.Newsletter || mongoose.model('Newsletter', NewsletterSchema);

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Validation de l'email
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Adresse e-mail invalide.' });
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any);

    try {
      await Newsletter.create({ email });

      try {
        // Envoi d'un email à l'administrateur
        await sendEmail(
          'contact@hellobasile.com',
          'Nouvelle inscription à la newsletter: ' + email,
          `L'email ${email} s'est inscrit à la newsletter.`,
          `<p>L'email ${email} s'est inscrit à la newsletter.</p>`
        );

        // Envoi d'un email à l'utilisateur
        await sendEmail(
          email,
          'Inscription réussie à Basile',
          `Félicitations ! Vous êtes maintenant inscrit à notre newsletter de Basile. Nous sommes ravis que vous ayez décidé de rejoindre notre communauté. Si vous avez des questions, n'hésitez pas à nous contacter à tout moment. À très bientôt, L'équipe de Basile`,
          `<div style="font-family: Poppins, sans-serif; color: #000; padding: 20px; text-align: justify;">
            <h1 style="color: #000; font-family: Sora, sans-serif;">Bienvenue chez Basile!</h1>
            <p><strong>Félicitations</strong> ! <br /> <br />
            Vous êtes maintenant inscrit à notre newsletter.</p>
            <p>Nous sommes ravis de vous avoir parmi nous et nous avons hâte de partager avec vous nos dernières actualités.</p>
            <p>À très bientôt,</p>
            <p><strong>Basile et son équipe</strong></p>
            <h1 style="color: #000; font-family: Sora, sans-serif;">Basile</h1>
          </div>`
        );
      } catch (emailError) {
        console.error('Erreur lors de l\'envoi de l\'e-mail: ', emailError);
      }

      return res.status(201).json({ message: 'Inscription réussie.' });
    } catch (error) {
      console.error('Erreur lors de l\'inscription: ', error);

      if (error.code === 11000) { // Code d'erreur MongoDB pour les doublons
        return res.status(400).json({ message: 'Cette adresse e-mail est déjà inscrite.' });
      }

      return res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'inscription.', details: error.message });
    } finally {
      await mongoose.connection.close();
    }
  }
};
