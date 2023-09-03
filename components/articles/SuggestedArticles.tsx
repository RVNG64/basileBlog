import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/articles/suggestedArticles.module.css';

interface SuggestedArticleProps {
  currentArticle: {
    slug: string;
    theme: string;
    tags: string[];
  };
  allArticles: Array<{
    slug: string;
    theme: string;
    tags: string[];
    title: string;
    createdAt: string;
  }>;
}

export default function SuggestedArticles({ currentArticle, allArticles }: SuggestedArticleProps) {
  const [suggestedArticles, setSuggestedArticles] = useState([]);

  useEffect(() => {
    let suggestions = allArticles.filter(article =>
      article.slug !== currentArticle.slug &&
      (article.theme === currentArticle.theme ||
        article.tags.some(tag => currentArticle.tags.includes(tag)))
    );

    if (suggestions.length < 3) {
      const randomArticles = allArticles.filter(article =>
        !suggestions.includes(article) &&
        article.slug !== currentArticle.slug
      );

      for (let i = suggestions.length; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * randomArticles.length);
        suggestions.push(randomArticles[randomIndex]);
        randomArticles.splice(randomIndex, 1);
      }
    }

    setSuggestedArticles(suggestions);
  }, [currentArticle, allArticles]);

  return (
    <div className="suggestedArticles__container">
      <h2>Articles Similaires</h2>
      <div className="suggestedArticles__cardsContainer">
        {suggestedArticles.map((article, index) => (
          <Link key={index} href={`/articles/${article.slug}`} className="suggestedArticles__card">
              <img src={article.image} alt="Image de l'article" className='suggestedArticles__image' />
              <div className="suggestedArticles__overlay"></div>
              <h3 className="suggestedArticles__title">{article.title}</h3>
              <p className="suggestedArticles__theme">{article.theme}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
