import { useEffect, useState } from 'react';
import Link from 'next/link';
import HeaderHome from '../components/HeaderHome';
import NewsletterSignup from '../components/NewsletterSignup';
import { articleList } from './articles/articleList/articleList';
import styles from '../styles/homeArticlesList.module.css';

const ArticleCard = ({ article }) => {

  return (
    <div className="articleCard">
      <div className="articleCard-container">

        {article && article.slug ? (
          <Link href={`/articles/${article.slug}`}>
            <div className="articleCard-content">
              <span className="articleCard-tag">{article.theme}</span>
              <h3 className="articleCard-title">{article.title}</h3>
              <p className="articleCard-summary">{article.summary}</p>
              <span className="articleCard-authorDate">{`${article.author} - ${article.createdAt}`}</span>
            </div>
            <div className="articleCard-imageContainer">
              <div className="articleCard-overlay"></div>
              <img src={article.image} alt="Image de l'article" className="articleCard-image"/>
            </div>
          </Link>
        ) : (
          <p>Chargement...</p>
        )}
      </div>
    </div>
  );
};

const Blog = () => {
  const convertDateToJSFormat = (dateStr) => {
    const [day, month, year] = dateStr.split('/');
    return new Date(`${year}-${month}-${day}`).getTime();
  };

  const sortedArticleList = [...articleList].sort((a, b) => convertDateToJSFormat(b.createdAt) - convertDateToJSFormat(a.createdAt));

/*
  function Admin() {

    if (session) {
      return (
        <>
          <button onClick={() => signOut()}>Se déconnecter</button>
        </>
      )
    }
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const res = await axios.get('/api/getArticles');
    console.log(res.data.data);
    setArticles(res.data.data);
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
  */

  return (
    <div>
      <div>
        <HeaderHome />

          <h1 className='articleList__title'>Blog de Basile</h1>
          <p className='articleList__subtitle'>Histoires, découvertes, rencontres et partages d'expériences au fil d'aventures entrepreneuriales</p>

          <div className="articlesContainer">
            {sortedArticleList.map((article, index) => (
              <ArticleCard
                key={index}
                article={article}
              />
            ))}
          </div>

      </div>
    </div>
  );
};

export default Blog;
