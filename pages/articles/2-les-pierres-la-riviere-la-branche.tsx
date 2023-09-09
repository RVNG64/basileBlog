import React, { useState, useEffect } from 'react';
import ShareArticle from '../../components/articles/ShareArticle';
import BackButton from '../../components/articles/BackButton';
import SuggestedArticles from '../../components/articles/SuggestedArticles';
import GoUpComponent from '../../components/GoUpComponent';
import { articleList } from '../../components/articles/articleList';
import styles from '../../../styles/articles/articlesCss.module.css';

export default function PierresRiviereBranche() {
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
          <img src="https://res.cloudinary.com/dvzsvgucq/image/upload/v1693784690/hervemake_The_stones_the_river_and_the_branch_close-up_of_the_o_713c91ed-f38f-4543-8a7d-e7ac156322be_meliqy.png" alt="The stones, the river and the branch" className="Basile__articleImage" />
        </div>

        <div className="Basile__articleContent">
          <h1 className="Basile__articleTitle">
            Les pierres, la rivière et la branche
          </h1>
          <h2 className="Basile__articleTheme">{articleList[1].theme}</h2>
          <p className="Basile__articleText">
            Un vieil artisan était connu dans tout le village pour ses sculptures de bois. Pourtant, il n'utilisait jamais de couteaux ou d'outils tranchants. À la place, il avait une collection de pierres rondes, douces et polies par le temps.
          </p>
          <p className="Basile__articleText">
            Intrigué, un jeune sculpteur vint lui demander comment il parvenait à des résultats si fins sans utiliser d'outils conventionnels.
            <br />
            Le vieil homme invita le jeune sculpteur à l'accompagner le lendemain à l'aube.
          </p>
          <img src="https://res.cloudinary.com/dvzsvgucq/image/upload/v1693784690/hervemake_The_stones_the_river_and_the_branch_the_old_craftsman_b822a68f-d346-45c7-87f9-1880b377bc65_wrn0sr.png" alt="The stones, the river and the branch" className="Basile__articleImage-content" />
          <p className="Basile__articleText">
            Ils se rendirent au bord de la rivière, où le vieil homme ramassa quelques pierres et les jeta dans l'eau.
            <br />
            <b><i>"Observe"</i></b> dit-il simplement.
            <br />
            Les pierres, en tombant, créèrent des ondulations à la surface de l'eau, qui s'étendirent jusqu'à toucher une petite branche flottante.
            À chaque nouvelle pierre lancée, la branche se déplaçait, comme guidée par les ondes, jusqu'à se retrouver coincée entre deux rochers.
          </p>
          <p className="Basile__articleText">
            <b><i>"Sais-tu pourquoi je t'ai montré cela ?"</i></b> demanda le vieil homme.
          </p>
          <p className="Basile__articleText">
            Avant que le jeune sculpteur puisse répondre, une énorme pluie commença à tomber, gonflant la rivière.
            La branche, autrefois coincée, fut libérée par la force de l'eau et se trouva propulsée sur la rive, parfaitement positionnée contre un tronc d'arbre.
            Le vent souffla et la branche, caressant le tronc, laissa des marques qui ressemblaient étrangement à des motifs artistiques.
          </p>
          <p className="Basile__articleText" style={{ textAlign: "center" }}>
            <b><i>"Les pierres, c'est toi. La rivière, c'est le temps. Et la branche, c'est ta création. Jeune homme, comprends-tu maintenant ?"</i></b>
          </p>
          <div className="Basile__articleSeparator"></div>
          <button onClick={openModal} className="Basile__shareButton">Partager</button>
          <div className="Basile__articleMeta">
            <p>Auteur : {articleList[1].author}</p>
            <p>Créé le : {articleList[1].createdAt}</p>
            <p>Tags : {articleList[1].tags.join(", ")}</p>
          </div>
          {isModalOpen && <ShareArticle closeModal={closeModal} isModalOpen={isModalOpen} modalRef={modalRef} />}
        </div>
      </div>
      <GoUpComponent />
      <SuggestedArticles currentArticle={currentArticle} allArticles={articleList} />
    </div>
  );
}
