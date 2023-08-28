import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    Credentials({
      // Indiquer les champs de saisie d'identifiants ici
      credentials: {
        username: { label: "Nom d'utilisateur", type: "text" },
        password: { label: "Mot de passe", type: "password" },
      },
      authorize: async (credentials) => {
        console.log("Credentials reçus :", credentials);

        const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
        const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

        if (credentials.username === ADMIN_USERNAME && credentials.password === ADMIN_PASSWORD) {
          return Promise.resolve({ id: '1', name: 'Admin' });
        } else {
          return Promise.reject(new Error('Access denied'));
        }
      }
    }),
  ],
});
