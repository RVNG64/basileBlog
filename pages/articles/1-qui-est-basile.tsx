import React, { useState, useEffect } from 'react';
import ShareArticle from '../../components/articles/ShareArticle';
import BackButton from '../../components/articles/BackButton';
import SuggestedArticles from '../../components/articles/SuggestedArticles';
import GoUpComponent from '../../components/GoUpComponent';
import { articleList } from '../../components/articles/articleList';
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
          <img src="https://res.cloudinary.com/dvzsvgucq/image/upload/v1688319003/0_3_z69gcb.png" alt="who is Basile?" className="Basile__articleImage imgArticle1" />
        </div>

        <div className="Basile__articleContent">
          <h1 className="Basile__articleTitle">
            Qui est Basile ?
          </h1>
          <h2 className="Basile__articleTheme">{articleList[0].theme}</h2>
          <h3 className='Basile__articleInsideTitle'>
            Bienvenue, cher lecteur !
          </h3>
          <p className="Basile__articleText">
            Vous êtes ici parce que vous vous demandez qui est derrière cette mystérieuse plateforme appelée Basile, n'est-ce pas?
            <br />
            Eh bien, installez-vous confortablement, car vous êtes sur le point de le découvrir.
          </p>
          <q><b><i>Alors, Basile... c'est qui ? ou... quoi ?</i></b></q>
          <p className="Basile__articleText">
            Pas si vite en besogne, cher lecteur ! Avant de vous dévoiler ma mission, laissez-moi vous conter mon histoire.
          </p>
          <h4 className='Basile__articleInsideTitle'>
            Synopsis
          </h4>
          <p className="Basile__articleText">
            Entre les business plan, les recherches de financements et la simple mais cruciale tâche de trouver une idée viable, les défis de l'entrepreneuriat sont ne manquent pas.
            <br />
            C'est là qu'intervient Basile.
          </p>
          <img src="https://res.cloudinary.com/dvzsvgucq/image/upload/v1688319004/0_0_1_vdwnlf.png" alt="Basile" className="Basile__articleImage-content" />
          <h4 className='Basile__articleInsideTitle'>
            Basile,  l'IA qui multiplie les chances de réussite des entrepreneurs
          </h4>
          <p className="Basile__articleText">
            Oui, Basile est la première plateforme d'accompagnement des entrepreneurs par l'IA.
            <br />
            Née de la passion et de l'expérience de ceux qui ont navigué dans ces eaux souvent tumultueuses, Basile vise à être le copilote que chaque entrepreneur souhaite avoir à ses côtés pour se donner toutes les chances de réussir son projet.
          </p>
          <q><b><i>L'expérience de milliers d'entrepreneurs réunis en Basile</i></b></q>
          <p className="Basile__articleText">
            Basile est un concept unique, fruit de l'expérience de milliers d'entrepreneurs, réunis en une seule et même plateforme.
            <br />
            Conférences, livres, podcasts, articles, vidéos, formations... Basile est un véritable condensé de connaissances et de savoir-faire, à la portée de tous.
            <br />
            Mais Basile se nourrit également de chacun de ses utilisateurs, de sorte que chacun puisse bénéficier de l'expérience de tous ceux qui l'ont précédé.
          </p>
          <img src="https://res.cloudinary.com/dvzsvgucq/image/upload/v1687979630/hervemake_grid_of_profile_pics_of_aspiring_happy_entrepreneurs__d04b6856-a7d6-4820-b1c1-224ae6ef0d3f_pvre1i.png" alt="Basile" className="Basile__articleImage-content" />
          <h4 className='Basile__articleInsideTitle'>
            Quel que soit le domaine ou la taille de votre projet
          </h4>
          <p className="Basile__articleText">
            Ouvrir un restaurant, créer une application, lancer une marque de vêtements, devenir influenceur, ou même créer une entreprise de services à la personne... Basile est là pour vous accompagner dans votre projet, quel qu'il soit.
            <br />
            Basile vous aide à trouver l'idée qui vous correspond, à la valider, à la développer, à la financer, à la promouvoir, et même à bénéficier des conseils et meilleures offres de nos partenaires.
            L'objectif de Basile n'est pas simplement de fournir des outils, mais de créer une expérience authentique et personnalisée pour chaque entrepreneur.
          </p>
          <q><b><i>Entraînement difficile, guerre facile</i></b></q>
          <p className="Basile__articleText">
            Basile est un véritable entraînement pour les entrepreneurs, qui leur permet de se préparer au mieux à la réalité du terrain.
            <br />
            En effet, Basile est un véritable simulateur de création d'entreprise, qui permet de se confronter à toutes les difficultés que l'on rencontre lorsqu'on se lance dans l'aventure.
            A l'écoute de tous vos retours pour faire évoluer ses fonctionnalités, Basile est un véritable partenaire de votre réussite.
            <br />
            Mais ne vous y trompez pas : ces algorithmes sont toujours au service de l'expérience humaine. Notre but n'est pas de remplacer l'intuition et la créativité, mais de les compléter.
          </p>
          <img src="https://res.cloudinary.com/dvzsvgucq/image/upload/v1687979643/hervemake_Experience_unparalleled_visibility_during_the_crucial_8b5c6696-ea3b-48e2-bcdc-3b20c094d12b_ear0oj.png" alt="Basile" className="Basile__articleImage-content" />
          <h4 className='Basile__articleInsideTitle'>
            La finalité ? Un dossier complet et de haut-niveau pour votre projet, comme peu d'entrepreneurs le font
          </h4>
          <p className="Basile__articleText">
            Validation de l'idée, étude de marché, business plan, univers de marque, buyer personas, mission/vision, structure juridique...
            <br />
            Des exercices et des quizz viendront également ponctuer votre parcours afin de vous permettre de valider vos acquis.
            <br />
            Vous l'aurez compris, Basile vous accompagne dans toutes les étapes de votre projet. Vous n'avez plus qu'à vous laisser guider.
          </p>
          <p className="Basile__articleText">
            Vous acquérez ainsi la confiance et toutes les connaissances nécessaires pour mener à bien votre projet, et vous monterez un dossier complet et de haut-niveau, comme peu d'entrepreneurs le font.
          </p>
          <img src="https://res.cloudinary.com/dvzsvgucq/image/upload/v1687979630/hervemake_grid_of_profile_pics_of_aspiring_happy_entrepreneurs__978f65c1-670f-49dc-b691-ca6931422d33_oxnrzm.png" alt="Basile" className="Basile__articleImage-content" />
          <h4 className='Basile__articleInsideTitle'>
            Et ça coûte combien ?
          </h4>
          <p className="Basile__articleText">
            Basile est entièrement gratuit pour le moment, et le restera pour les premiers utilisateurs. Les bêtatesteurs, en somme, qui nous permettent de faire évoluer Basile à ses débuts.
            <br />
            En effet, nous souhaitons que Basile soit accessible à tous, et que chacun puisse bénéficier de l'expérience de tous ceux qui l'ont précédé.
            <br />
            Cependant, nous ne pouvons pas nous permettre de maintenir Basile gratuit indéfiniment.
          </p>
          <h4 className='Basile__articleInsideTitle'>
            Alors, qu'attendez-vous pour vous lancer ?
            Votre aventure entrepreneuriale commence ici !
          </h4>
          <p className="Basile__articleText">
          Avec Basile, vous ne serez plus jamais seul. <b>Votre succès, c'est notre mission.</b>
          <br />
          Prenez votre avenir en main, rejoignez la révolution Basile !
          </p>
          <button className="basileNavbarButton">
            <a href="https://www.hellobasile.com/" target="_blank" rel="noopener noreferrer">
              Tester gratuitement Basile
            </a>
          </button>
          <div className="Basile__articleSeparator"></div>
          <button onClick={openModal} className="Basile__shareButton">Partager</button>
          <div className="Basile__articleMeta">
            <p>Auteur : {articleList[0].author}</p>
            <p>Créé le : {articleList[0].createdAt}</p>
            <p>Tags : {articleList[0].tags.join(", ")}</p>
          </div>
          {isModalOpen && <ShareArticle closeModal={closeModal} isModalOpen={isModalOpen} modalRef={modalRef} />}
        </div>
      </div>
      <GoUpComponent />
      <SuggestedArticles currentArticle={currentArticle} allArticles={articleList} />
    </div>
  );
}
