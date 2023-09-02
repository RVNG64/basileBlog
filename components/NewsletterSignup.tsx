import { useState } from 'react';
import styles from '../styles/newsletterSignup.module.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/newsletterSubscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.message) {
      setIsError(false);
      setMessage(data.message);

      // Faire disparaître le message après 5 secondes
      setTimeout(() => {
        setMessage('');
      }, 5000);

    } else {
      setIsError(true);
      setMessage('Une erreur s\'est produite. Veuillez réessayer.');
    }
  };

  return (
    <div className="newsletterSignup-container">
      <h3>Multipliez vos chances de réussite en tant qu'entrepreneur !</h3>
      <p>Recevez les dernières nouvelles de Basile directement dans votre boîte mail.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre adresse e-mail"
          required
        />
        <button type="submit">S'inscrire</button>
      </form>
      {message && (
        <p className={isError ? "newsL__error-message" : "newsL__confirmation-message"}>
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup;
