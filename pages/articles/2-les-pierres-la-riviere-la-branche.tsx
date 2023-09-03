import React, { useState, useEffect } from 'react';
import ShareArticle from '../../components/articles/ShareArticle';
import BackButton from '../../components/articles/BackButton';
import SuggestedArticles from '../../components/articles/SuggestedArticles';
import { articleList } from './articleList/articleList';
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
          <img src="https://res.cloudinary.com/dvzsvgucq/image/upload/v1688319003/0_3_z69gcb.png" alt="who is Basile?" className="Basile__articleImage" />
        </div>

        <div className="Basile__articleContent">
          <h1 className="Basile__articleTitle">
            Les pierres, la rivière et la branche
          </h1>
          <h2 className="Basile__articleTheme">{articleList[0].theme}</h2>
          <p className="Basile__articleText">
          Un vieil artisan était connu dans tout le village pour ses sculptures de bois. Pourtant, il n'utilisait jamais de couteaux ou d'outils tranchants. À la place, il avait une collection de pierres rondes, douces et polies par le temps. Intrigué, un jeune sculpteur vint lui demander comment il parvenait à des résultats si fins sans utiliser d'outils conventionnels.

          Le vieil homme invita le jeune sculpteur à l'accompagner le lendemain à l'aube. Ils se rendirent au bord de la rivière, où le vieil homme ramassa quelques pierres et les jeta dans l'eau. "Observe," dit-il simplement.

          Les pierres, en tombant, créèrent des ondulations à la surface de l'eau, qui s'étendirent jusqu'à toucher une petite branche flottante. À chaque nouvelle pierre lancée, la branche se déplaçait, comme guidée par les ondes, jusqu'à se retrouver coincée entre deux rochers.

          "Sais-tu pourquoi je t'ai montré cela ?" demanda le vieil homme.

          Avant que le jeune sculpteur puisse répondre, une énorme pluie commença à tomber, gonflant la rivière. La branche, autrefois coincée, fut libérée par la force de l'eau et se trouva propulsée sur la rive, parfaitement positionnée contre un tronc d'arbre. Le vent souffla et la branche, caressant le tronc, laissa des marques qui ressemblaient étrangement à des motifs artistiques.

          "Les pierres, c'est toi. La rivière, c'est le temps. Et la branche, c'est ta création. Comprends-tu maintenant ?"          </p>
          <button onClick={openModal} className="Basile__shareButton">Partager</button>
          <div className="Basile__articleMeta">
            <p>Auteur : {articleList[1].author}</p>
            <p>Créé le : {articleList[1].createdAt}</p>
            <p>Tags : {articleList[1].tags.join(", ")}</p>
          </div>
          {isModalOpen && <ShareArticle closeModal={closeModal} isModalOpen={isModalOpen} modalRef={modalRef} />}
        </div>
      </div>
      <SuggestedArticles currentArticle={currentArticle} allArticles={articleList} />
    </div>
  );
}
