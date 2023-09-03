import React, { useState, useEffect } from 'react';
import ShareArticle from '../../components/articles/ShareArticle';
import BackButton from '../../components/articles/BackButton';
import SuggestedArticles from '../../components/articles/SuggestedArticles';
import { articleList } from './articleList/articleList';
import styles from '../../../styles/articles/articlesCss.module.css';

export default function QuiEstBasile() {
  const currentArticle = articleList.find(article => article.slug === '1-qui-est-basile') || {} as typeof articleList[0];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = React.useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [modalRef, closeModal]);

  return (
    <div>
      <div className="Basile__articleDetailContainer">
        <BackButton />

        <div className="Basile__articleHeader">
          <img src="https://res.cloudinary.com/dvzsvgucq/image/upload/v1688319003/0_3_z69gcb.png" alt="who is Basile?" className="Basile__articleImage" />
        </div>

        <div className="Basile__articleContent">
          <h1 className="Basile__articleTitle">
            Qui est Basile ?
          </h1>
          <h2 className="Basile__articleTheme">{articleList[0].theme}</h2>
          <p className="Basile__articleText">
            Basile est un jeune développeur web de 21 ans, actuellement en formation à la Wild Code School de Reims.
            Il a commencé à s'intéresser au développement web en 2019, et a décidé de se lancer dans une formation intensive de 5 mois en 2021.
            Il a créé ce blog dans le cadre de sa formation, afin de partager ses connaissances et ses découvertes avec le monde.
          </p>
          <button onClick={openModal} className="Basile__shareButton">Partager</button>
          <div className="Basile__articleMeta">
            <p>Auteur : {articleList[0].author}</p>
            <p>Créé le : {articleList[0].createdAt}</p>
            <p>Tags : {articleList[0].tags.join(", ")}</p>
          </div>
          {isModalOpen && <ShareArticle closeModal={closeModal} isModalOpen={isModalOpen} modalRef={modalRef} />}
        </div>
      </div>
      <SuggestedArticles currentArticle={currentArticle} allArticles={articleList} />
    </div>
  );
}
