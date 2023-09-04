import React, { useState, useEffect } from 'react';
import ShareArticle from '../../components/articles/ShareArticle';
import BackButton from '../../components/articles/BackButton';
import SuggestedArticles from '../../components/articles/SuggestedArticles';
import { articleList } from '../../components/articles/articleList';
import styles from '../../../styles/articles/articlesCss.module.css';

export default function MiroirArtBonnesQuestions() {
  const currentArticle = articleList.find(article => article.slug === '2-les-pierres-la-riviere-la-branche') || {} as typeof articleList[0];
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
          <img src="https://res.cloudinary.com/dvzsvgucq/image/upload/v1690489096/hervemake_An_entrepreneur_sits_alone_in_a_serene_natural_settin_06483e8b-63b3-4715-a01b-9720c9a937d6_sebxnf.png" alt="Introspection the art of asking yourself the right questions" className="Basile__articleImage" />
        </div>

        <div className="Basile__articleContent">
          <h1 className="Basile__articleTitle">
            Surmonter la peur de se lancer quand on souhaite entreprendre
          </h1>
          <h2 className="Basile__articleTheme">{articleList[3].theme}</h2>
          <p className="Basile__articleText">
            Vous avez une idée géniale, une passion, et même peut-être un plan d'affaires, mais quelque chose vous retient : la peur.
            L'entrepreneuriat est une aventure qui fait rêver beaucoup d'individus. Cependant, la peur de se lancer constitue un obstacle majeur pour de nombreux aspirants entrepreneurs.
            <br />
            Dans cet article, nous allons explorer les différentes facettes de cette peur et comment la surmonter pour réussir dans l'entrepreneuriat.
          </p>
          <q><b><i>La peur de l'échec</i></b></q>
          <h3 className='Basile__articleInsideTitle'>
            Comprendre la peur
          </h3>
          <p className="Basile__articleText">
            La peur est une réaction émotionnelle naturelle qui a une utilité biologique : elle nous protège du danger. Cependant, dans le contexte de l'entrepreneuriat, cette peur peut devenir un obstacle plutôt qu'une aide.
            <br />
            En effet, la peur de l'échec peut nous empêcher de nous lancer dans un projet, même si celui-ci nous tient à coeur.
            <br />
            Il y a plusieurs raisons à cela. Cela peut être dû à un manque de confiance, à la peur de l'échec, ou du regard des autres.
            <br />
            Le problème vient souvent de notre perception des risques. Nous avons tendance à surestimer les dangers et à sous-estimer les opportunités. Il est donc essentiel de réévaluer rationnellement les risques avant de se laisser paralyser par la peur.
          </p>
          <img src="https://res.cloudinary.com/dvzsvgucq/image/upload/v1690488056/hervemake_A_determined_entrepreneur_sitting_alone_in_a_dimly_li_38be7651-370e-4a0e-88fc-b864290c8799_f5ak6z.png" alt="Introspection the art of asking yourself the right questions" className="Basile__articleImage-content" />
          <h3 className='Basile__articleInsideTitle'>
            Les principales peurs de la personne hésitant à se lancer
          </h3>
          <p className="Basile__articleText">
            <b>La peur de l'échec</b>
            <br />
            La peur de l'échec est probablement la plus répandue. L'idée de ne pas réussir et de perdre du temps et des ressources peut être accablante.
          </p>
          <p className="Basile__articleText">
            <b>La peur du jugement</b>
            <br />
            Cette peur est souvent liée à notre ego. Nous avons peur de ce que les autres penseront de nous si nous échouons.
          </p>
          <p className="Basile__articleText">
            <b>La perte financière</b>
            <br />
            L'aspect financier est souvent une grande source de stress. Vous vous demandez peut-être : "Et si je perds tout mon argent ?"
          </p>
          <p className="Basile__articleText">
            <b>La peur de l'inconnu</b>
            <br />
            L'entrepreneuriat est un voyage dans l'inconnu. Cela peut être effrayant, mais c'est aussi ce qui le rend si excitant !
          </p>
          <p className="Basile__articleText">
            <b>La peur de la solitude</b>
            <br />
            L'entrepreneuriat est un voyage solitaire. Vous devez être prêt à travailler seul et à prendre des décisions difficiles.
          </p>
          <p className="Basile__articleText">
            <b>Par où commencer et comment ne rien oublier ?</b>
            <br />
            Marketing, comptabilité, gestion, etc. Il y a tellement de choses à faire ! Comment s'en sortir dans tout ça ?
            <br />
            La paperasse peut être un obstacle pour certains. Cependant, il existe de nombreuses solutions pour vous aider à surmonter cette peur.
            L'essor des nouvelles technologies et des services en ligne a largement contribué à atténuer cette peur.
          </p>
          <img src="https://res.cloudinary.com/dvzsvgucq/image/upload/v1693844554/0_0_6_tqlfnk.png" alt="Introspection the art of asking yourself the right questions" className="Basile__articleImage-content" />
          <h3 className='Basile__articleInsideTitle'>
            Comment surmonter la peur de se lancer ?
            <br />
            Faîtes-en votre alliée !
          </h3>
          <p className="Basile__articleText">
            La peur a de nombreux avantages cachés !
            <br />
            Elle nous aide à rester concentrés et à nous préparer au pire. Elle nous pousse à nous améliorer et à nous dépasser.
            Si la peur est généralement perçue comme un frein, elle peut aussi être un excellent stimulant. Elle vous pousse à vous préparer de façon méticuleuse et à être plus attentif aux détails, des qualités indispensables dans le monde de l'entreprise.
          </p>
          <h3 className='Basile__articleInsideTitle'>
            La puissance de la préparation
          </h3>
          <p className="Basile__articleText">
            La préparation est la clé pour surmonter la peur de se lancer. Plus vous serez préparés, plus vous serez confiants.
            <br />
            Ne dit-on pas: <br />
          </p>
          <q><b><i>Entraînement difficile, guerre facile.</i></b></q>
          <h3 className='Basile__articleInsideTitle'>
            Passer de 0 à 1
          </h3>
          <p className="Basile__articleText">
            <b>Commencez petit</b>
            <br />
            Vous n'avez pas besoin de tout savoir avant de vous lancer. Commencez petit et apprenez au fur et à mesure.
            <br />
            D'abord des petites actions qui constitueront vos premières victoires: poser ses idées par écrit, lire des livres sur l'entrepreneuriat, écouter des podcasts, etc... Toutes ces petites actions vous aideront à vous sentir plus confiant et vous mèneront vers des actions inexorablement plus importantes.
            <br />
            Les objectifs SMART (Spécifiques, Mesurables, Atteignables, Réalistes et Temporellement définis) vous aideront à rester focalisé et à mesurer vos progrès, réduisant ainsi l'anxiété liée à l'inconnu. Mais nous reviendrons sur cette notion dans un prochain article.
          </p>
          <img src="https://res.cloudinary.com/dvzsvgucq/image/upload/v1693844553/hervemake_A_determined_startup_founder_reaching_out_to_their_pe_c85c8cc9-f795-4e14-9f0f-0b27628774f0_vbidxq.png" alt="Introspection the art of asking yourself the right questions" className="Basile__articleImage-content" />
          <h3 className='Basile__articleInsideTitle'>
            L'importance du mentorat
          </h3>
          <p className="Basile__articleText">
            Cette solution n'est pas toujours simple à mettre en place car il faut en trouver l'opportunité autour de soi.
            <br />
            Famille, amis, anciens professeurs, incubateurs, etc. Il existe de nombreuses possibilités qui peuvent vous aider à surmonter vos peurs et à vous lancer.
            <br />
            Le mentorat est un excellent moyen pour cela. Il vous permet de bénéficier de l'expérience de personnes qui ont déjà parcouru le chemin que vous souhaitez emprunter.
          </p>
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', textAlign: 'center' }}>
            Basile</h1>
          <p className="Basile__articleText">
            <b>C'est d'ailleurs la mission de Basile !</b>
            <br />
            Notre plateforme d'accompagnement des entrepreneurs vous permet d'être mentoré par Basile, dont la mission est justement de vous aider à surmonter vos peurs en vous guidant pas à pas dans la préparation de votre projet.
            <br />
            De l'idée à la création de votre entreprise, Basile vous accompagne dans toutes les étapes afin que vous maîtrisiez parfaitement votre projet et que vous soyez prêt à vous lancer... si vous le souhaitez !
            <br />
            <b>Aucun risque !</b>
          </p>
          <h3 className='Basile__articleInsideTitle'>
            Alors, prêt à passer de 0 à 1 ?
          </h3>
          <button className="basileNavbarButton">
            <a href="https://www.hellobasile.com/" target="_blank" rel="noopener noreferrer">
              Tester gratuitement Basile
            </a>
          </button>
          <div className="Basile__articleSeparator"></div>
          <button onClick={openModal} className="Basile__shareButton">Partager</button>
          <div className="Basile__articleMeta">
            <p>Auteur : {articleList[3].author}</p>
            <p>Créé le : {articleList[3].createdAt}</p>
            <p>Tags : {articleList[3].tags.join(", ")}</p>
          </div>
          {isModalOpen && <ShareArticle closeModal={closeModal} isModalOpen={isModalOpen} modalRef={modalRef} />}
        </div>
      </div>
      <SuggestedArticles currentArticle={currentArticle} allArticles={articleList} />
    </div>
  );
}
