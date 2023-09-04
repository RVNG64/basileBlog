import React, { useState, useEffect } from 'react';
import ShareArticle from '../../components/articles/ShareArticle';
import BackButton from '../../components/articles/BackButton';
import SuggestedArticles from '../../components/articles/SuggestedArticles';
import { articleList } from '../../components/articles/articleList';
import styles from '../../../styles/articles/articlesCss.module.css';

export default function LessonsBetterCS() {
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
          <img src="https://m.media-amazon.com/images/S/pv-target-images/fe1c0138b7b0e05ea22a711f44e57cd80cfbaea30745c425b7043d786ba66cd1.jpg" alt="Lessons Better Call Saul" className="Basile__articleImage" />
        </div>

        <div className="Basile__articleContent">
          <h1 className="Basile__articleTitle" style={{ textAlign: "center" }}>
            7 leçons entrepreneuriales tirées de
            <br />la série Better Call Saul
          </h1>
          <h2 className="Basile__articleTheme">{articleList[2].theme}</h2>
          <p className="Basile__articleText">
            Alors, vous avez suivi les aventures de Saul Goodman dans la série Better Call Saul ?          </p>
          <p className="Basile__articleText">
            Ce personnage haut en couleur nous donne une myriade de leçons entrepreneuriales qui peuvent être extrêmement utiles dans la vie réelle.
            <br />
            Asseyez-vous confortablement, allons plonger dans le monde fascinant de Jimmy McGill, alias Saul Goodman !
          </p>
          <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTliZWRxc3dwZGFlc3dsZmxmZjRoeG5yZWkxOG4wbDl2ejNwem4wMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3osxYeFT1QcxgzEXss/giphy.gif" alt="The stones, the river and the branch" className="Basile__articleImage-content" />
          <h3 className="Basile__articleInsideTitle">
            Qui est Saul Goodman ?
          </h3>
          <p className="Basile__articleText">
            Saul Goodman n'est pas juste un avocat à la moralité douteuse; c'est aussi un entrepreneur talentueux avec un sens aigu des affaires.
            <br />
            Pourquoi devrait-on l'écouter ? Parce que le succès, c'est aussi une question de prise de risque et d'innovation, deux éléments que Saul maîtrise à la perfection.
          </p>
          <p className="Basile__articleText">
            Avant de devenir le Saul Goodman que l'on connaît, il était Jimmy McGill, un avocat en herbe avec un talent pour la débrouillardise. Cette période de sa vie nous montre que le chemin entrepreneurial est souvent semé d'embûches, mais qu'avec de la persévérance, on peut arriver loin.
          </p>
          <h3 className="Basile__articleInsideTitle">
            Leçon n°1 : L'art de la négociation
          </h3>
          <p className="Basile__articleText">
            Négocier est un art, et Saul le sait bien. Dans le monde des affaires, être un bon négociateur peut faire la différence entre un échec et un succès.
            <br />
            Dans la série, Saul négocie avec tout le monde, des criminels aux policiers, en passant par les juges et les avocats.
            <br />
            Le personnage utilise souvent des techniques de négociation non conventionnelles pour obtenir ce qu'il veut. À prendre ou à laisser ?
            <br />
            Pas pour Saul, qui sait toujours comment trouver le point de bascule de son interlocuteur afin d'atteindre ses objectifs.
          </p>
          <h3 className="Basile__articleInsideTitle">
            Leçon n°2 : L'importance du branding
          </h3>
          <p className="Basile__articleText">
            Saul Goodman est un maître du branding. De son vrai nom Jimmy McGill, il s'est créé un personnage de toutes pièces afin de se démarquer de ses concurrents.
            <br />
            Son nom est facile à retenir, il est facile à prononcer, il est facile à écrire... et il a une histoire ! <i>"It's all good man"</i> (en français : <i>"Tout va bien mec"</i>) est une phrase que Saul Goodman utilise souvent pour rassurer ses clients.
          </p>
          <p className="Basile__articleText">
            "Better Call Saul" n'est pas juste un slogan, c'est une marque. Et une marque puissante peut vous aider à vous démarquer dans un marché saturé.
            <br />
            L'image de marque doit être cohérente. Saul Goodman est cohérent dans sa communication, son apparence et même dans la décoration de son bureau. Tout contribue à renforcer son branding.
            <br />
            Il y a Saul, et le reste du monde. On sait exactement à quoi s'attendre quand on frappe à sa porte. C'est ce qui fait de lui un personnage si mémorable.
          </p>
          <img src="https://wizardofads.org/wp-content/uploads/better-call-saul.png" alt="Saul Goodman" className="Basile__articleImage-content" />
          <h3 className="Basile__articleInsideTitle">
            Leçon n°3 : Toujours avoir un plan B
          </h3>
          <p className="Basile__articleText">
            Saul Goodman est un homme d'affaires avisé. Il sait que les choses ne se passent pas toujours comme prévu.
            <br />
            Dans ce cas, faire preuve de flexibilité et d'adaptabilité est essentiel pour réussir et continuer d'avancer.
            <br />
            Dans l'univers incertain des affaires, avoir un plan B est crucial. Il permet de réagir rapidement aux imprévus sans paniquer.
          </p>
          <h3 className="Basile__articleInsideTitle">
            Leçon n°4 : La valeur du réseau
          </h3>
          <p className="Basile__articleText">
            Pour Saul, le réseau est essentiel. Il a toujours quelqu'un à appeler pour résoudre un problème ou saisir une opportunité.
            <br />
            Il sait que le succès ne se fait pas seul, et qu'il faut s'entourer des bonnes personnes pour réussir.
          </p>
          <p className="Basile__articleText">
            Son carnet d'adresses est varié, allant des criminels aux juges, ainsi que des commerçants ou même des SDF . Cette variété lui donne un avantage unique pour manoeuvrer dans différents environnements.
          </p>
          <img src="https://media0.giphy.com/media/O85oH9tIfzsXK/giphy.gif?cid=ecf05e47jtqdyq3sndbimrnwxbbpr52n94n7v5h6b6qw4h98&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Saul Goodman" className="Basile__articleImage-content" />
          <h3 className="Basile__articleInsideTitle">
            Leçon n°5 : Ecouter et apprendre
          </h3>
          <p className="Basile__articleText">
            Dans un monde en constante évolution, l'apprentissage continu est une nécessité. Saul ne cesse jamais d'apprendre de ses erreurs et de ses succès.
            <br />
            Comme cette fois où il a dû apprendre à parler espagnol pour pouvoir communiquer avec ses nouveaux clients hispanophones et se passer de son interprète qui ne pourrait jamais donner la même intensité à ses plaidoiries.
          </p>
          <p className="Basile__articleText">
            Bien que souvent confiant, Saul est aussi capable de prendre du recul pour évaluer ses actions et ajuster sa stratégie. C'est un signe de sa maturité en tant qu'entrepreneur.
          </p>
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGJpc3dpbXJjanp5NWw3azlkbG5hMjZta3NveXRqYXJhN2JsdmcydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S6SnRTjcmEg46qN9jI/giphy.gif" alt="Saul Goodman" className="Basile__articleImage-content" />
          <h3 className="Basile__articleInsideTitle">
            Leçon n°6 : La persévérance
          </h3>
          <p className="Basile__articleText">
            Le monde des affaires est en constante évolution. Ceux qui ne s'adaptent pas sont destinés à disparaître. Saul Goodman est un maître de l'adaptation.
            <br />
            Il obtient son diplôme de droit contre vents et marées, commence comme avocat en herbe, puis un avocat d'affaires, avant de défendre des criminels jusqu'à son client le plus célèbre : Walter White, le chimiste devenu baron de la drogue dans la série Breaking Bad.
            <br />
            Sa rencontre avec l'ancien professeur le fait définivement basculer dans le monde du crime, mais jamais il ne perd pied et navigue, non sans difficultés, dans les eaux troubles de la criminalité.
          </p>
          <img src="https://i.guim.co.uk/img/media/e0e82ca8ac25bd9bd87799b133ad3157c39e0b0f/0_0_2560_1536/master/2560.jpg?width=465&dpr=1&s=none" alt="Saul Goodman Walter White Breaking Bad" className="Basile__articleImage-content" />
          <h3 className="Basile__articleInsideTitle">
            Leçon n°7 : De l'ambition à la fuite en avant, la frontière de l'éthique n'est jamais loin
          </h3>
          <p className="Basile__articleText">
            Saul est un homme tiraillé et plein d'ambiguités. Sa détermination à réussir réside à la base dans son désir de faire plaisir à son frère, Chuck, un avocat de renom qui ne croit pas en lui.
            <br />
            Dès lors, Saul va tout faire pour prouver sa valeur à son frère, essayant dans un premier de singer son style et ses méthodes, avant de se rendre compte que son frère ne le soutiendra jamais.
            <br />
            Pour Chuck, Jimmy est un escroc, un petit avocat de province qui ne mérite pas de réussir. Et quoi que fasse Jimmy, Chuck ne changera jamais d'avis.
            <br />
            C'est ce qui va le pousser à se réinventer en Saul Goodman, un avocat sans scrupules qui ne recule devant rien pour gagner. Et c'est ainsi qu'il va obtenir les meilleurs résultats de sa carrière, financiers et professionnels.
          </p>
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3N2NW5mOWc3ZHpkYjh6ajVsYW05ZmliNnczMWh3Y2dwcjJ3aTk5dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hsDSL38kAnKYI0gSXo/giphy.gif" alt="Saul Goodman" className="Basile__articleImage-content" />
          <p className="Basile__articleText">
            Paradoxal, puisque cette réussite est pour Jimmy le signe que Chuck avait tort. Mais aussi la preuve que Chuck avait raison : Jimmy ne peut pas réussir sans tricher.
          </p>
          <p className="Basile__articleText">
            C'est à travers ce paradoxe que Saul va danser tout au long de la série, entre son envie débordante de réussir pour prouver au monde que son frère avait tort... et sa nature profonde qui le pousse à jouer avec la ligne rouge en permanence puisqu'elle est sa plus fidèle pourvoyeuse de succès.
          </p>
          <p className="Basile__articleText">
            L'histoire de Saul Goodman est donc également une mise en garde contre les dangers de l'entrepreneuriat lorsqu'il n'est pas animé par la bonne énergie. Car si Saul semble à première vue obtenir les résultats qu'il souhaite, il n'est jamais vraiment heureux car la façon dont il les obtient donne raison à ceux qui le dénigrent.
            <br />
            Et ses choix contraires à l'éthique ont presque toujours des conséquences graves, tant pour lui que pour les personnes qui l'entourent.
          </p>
          <h3 className="Basile__articleInsideTitle">
            Et vous, qu'avez-vous pensé de Better Call Saul ?
          </h3>
          <img src="https://i.ytimg.com/sh/J16h_OEhDTg6Ix7C7HJ_6A/market_sd.jpg" alt="Saul Goodman" className="Basile__articleImage-content" />
          <div className="Basile__articleSeparator"></div>
          <button onClick={openModal} className="Basile__shareButton">Partager</button>
          <div className="Basile__articleMeta">
            <p>Auteur : {articleList[2].author}</p>
            <p>Créé le : {articleList[2].createdAt}</p>
            <p>Tags : {articleList[2].tags.join(", ")}</p>
          </div>
          {isModalOpen && <ShareArticle closeModal={closeModal} isModalOpen={isModalOpen} modalRef={modalRef} />}
        </div>
      </div>
      <SuggestedArticles currentArticle={currentArticle} allArticles={articleList} />
    </div>
  );
}
