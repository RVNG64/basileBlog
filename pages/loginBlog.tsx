import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const LoginBlog: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      // Gérer l'erreur
      console.error(result.error);
    } else {
      // Rediriger vers la page d'accueil'
      router.push('/');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Identifiant:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginBlog;
