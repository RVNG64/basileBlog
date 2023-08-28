import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import HeaderHome from '../components/HeaderHome';
import { useSession, signIn, signOut } from 'next-auth/react'

const ArticleCard = ({ article, onDelete }) => {
  const { data: session } = useSession()

  console.log(article.slug);

  return (
    <div className="articleCard">
      {article && article.slug ? (
        <Link href={`/articles/${article.slug}`}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </Link>
      ) : (
        <p>Chargement...</p>
      )}
      {session && (
        <div>
          <button onClick={() => onDelete(article._id)}>Supprimer</button>
        </div>
      )}
    </div>
  );
};

const Blog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [articles, setArticles] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const { data: session } = useSession()

  function Admin() {

    if (session) {
      return (
        <>
          {/* Votre interface d'administration */}
          <button onClick={() => signOut()}>Se déconnecter</button>
        </>
      )
    }

    if (!session) {
      return (
        <div>
          <h1>Non autorisé</h1>
          <button onClick={() => signIn('credentials')}>Se connecter</button>
        </div>
      )
    }

    return (
      <button onClick={() => signIn('credentials')}>Se connecter</button>
    )
  }

  function generateSlug(title) {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '');
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const res = await axios.get('/api/getArticles');
    console.log(res.data.data);
    setArticles(res.data.data);
  };

  const handleAddArticle = async (e) => {
    e.preventDefault();
    const slug = generateSlug(title);
    const article = { title, slug, content, author, tags: tags.split(',') };
    const res = await axios.post('/api/addArticles', article);
    if (res.data.success) {
      fetchArticles();
      setTitle('');
      setContent('');
      setAuthor('');
      setTags('');
    } else {
      console.error('Erreur lors de l\'ajout de l\'article');
    }
  };

  const handleDeleteArticle = async (id) => {
    console.log("Deleting article with ID:", id);

    try {
      const res = await axios.delete(`/api/deleteArticles?id=${id}`);
      console.log(res);

      if (res.status === 204) { // Vérification du code de statut
        fetchArticles(); // Mettre à jour la liste des articles
      } else {
        console.error('Erreur lors de la suppression de l\'article');
      }
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'article: ${error}`);
    }
  };

  return (
    <div>
      {session && (
        <div>
          <h2>Ajouter un article</h2>
          <Admin />
          <form onSubmit={handleAddArticle}>
            <label>
              Titre :
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
              Auteur :
              <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </label>
            <label>
              Tags :
              <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
            </label>
            <label>
              Contenu :
              <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            </label>
            <button type="submit">Ajouter</button>
          </form>
        </div>
      )}

      <div>
        <HeaderHome />
        <h1>Blog de Basile... & compagnie !</h1>
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            article={article}
            onDelete={handleDeleteArticle}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
