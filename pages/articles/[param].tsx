import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Article({ article }) {

/*  const handleDeleteArticle = async (e, id) => {
    e.preventDefault();

    try {
      const res = await axios.delete(`/api/deleteArticles?id=${id}`);
      console.log(res);

      if (res.status === 204) { // Vérification du code de statut
        // Redirige vers la page d'accueil
        window.location.href = '/';
      } else {
        console.error('Erreur lors de la suppression de l\'article');
      }
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'article: ${error}`);
    }
  };

    const handleEditArticle = async (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire
    const slug = generateSlug(title); // Génère un slug à partir du titre
    const updatedArticle = { title, slug, content, author, tags: tags.split(',') }; // Prépare les nouvelles données

    console.log("Updating article with ID:", editingId);
    console.log("Data:", updatedArticle);

    try {
      const res = await axios.put(`/api/updateArticles?slug=${slug}`, updatedArticle); // Appelle l'API pour mettre à jour

      if (res.data.success) {
        setTitle(''); // Réinitialise les champs
        setContent('');
        setAuthor('');
        setTags('');
        setEditingId(null); // Réinitialise l'ID d'édition
        setIsEditing(false);
        window.location.href = `/articles/${slug}`;
      } else {
        console.error('Erreur lors de la modification de l\'article');
      }
    } catch (error) {
      console.error(`Erreur lors de la modification de l'article: ${error}`);
    }
  };
*/
  return (
    <div>
      <div>
        <h1>{article.title}</h1>
        <p>{article.summary}</p>
        <p>Auteur : {article.author}</p>
        <p>Créé le {new Date(article.createdAt).toLocaleDateString('fr-FR')}</p>
        <p>Tags : {article.tags}</p>

      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps appelée");

  const { param } = context.params;
  console.log("Param reçu :", param);

  try {
    let res;

    if (/^[0-9a-fA-F]{24}$/.test(param)) {
      console.log("ID MongoDB détecté");
      res = await axios.get(`http://localhost:3000/api/getArticle?id=${param}`);
    } else {
      console.log("Slug détecté");
      res = await axios.get(`http://localhost:3000/api/getArticleBySlug?slug=${param}`);
    }

    console.log("Réponse de l'API:", res.data);

    if (res.data.success) {
      console.log("Article trouvé :", res.data.data);
      return {
        props: { article: res.data.data },
      };
    } else {
      console.log("Article non trouvé");
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.log("Erreur capturée:", error);
    console.log(`Erreur lors de la récupération de l'article : ${error}`);
    return {
      notFound: true,
    };
  }
}
