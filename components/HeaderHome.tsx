import React from 'react';
import styles from '../styles/headerHome.module.css';

export default function HeaderHome() {
  return (
    <div>
      <div className="header-home-container">
        <div className="header__text-container">
          <h1 className="header__main-title">Faîtes-vous accompagner par l'expérience de milliers d'entrepreneurs avec Basile</h1>
          <h3 className="header__sub-title">La toute première IA qui vous accompagne dans votre projet de création d'entreprise</h3>
          <h3 className="header__sub-title">Il n'a jamais été aussi simple de se lancer !</h3>
        </div>
        <div className="header__image-container">
          <img src="https://res.cloudinary.com/dvzsvgucq/image/upload/v1688319004/0_0_ibun5l.png" alt="Basile blog" className="header__blog-image"/>
        </div>
      </div>
      <div className="header__black-title">
        <div className="header__video-background">
          <video loop autoPlay muted>
            <source src="https://res.cloudinary.com/dvzsvgucq/video/upload/v1679239423/FREE_4K_Light_Leak_o8bz1x.mp4" type="video/mp4" />
          </video>
        </div>
        <h2 className="header__text-overlay">
          Votre aventure entrepreneuriale commence ici !
        </h2>
      </div>
    </div>
  );
}
