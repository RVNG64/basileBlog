import React from 'react';
import styles from '../styles/testCTAHome.module.css';

export default function TestCTAHome() {
  return (
    <div className="cta-home-container">
      <div className="header__video-background">
        <video loop autoPlay muted>
          <source src="https://res.cloudinary.com/dvzsvgucq/video/upload/v1679239423/FREE_4K_Light_Leak_o8bz1x.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="cta-home-content">
        <div className="cta-home-text">
          <h3>Prêt à tenter l'aventure entrepreneuriale?</h3>
          <p>Il n'y a pas de meilleur moment que maintenant pour prendre son destin en main.</p>
        </div>
        <div className="cta-home-button">
          <button className="basileNavbarButton">Tester gratuitement Basile</button>
        </div>
      </div>
    </div>
  );
}
