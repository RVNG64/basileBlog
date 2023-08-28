import React from 'react';
import styles from '../styles/TestCTAHome.module.css';

export default function TestCTAHome() {
  return (
    <div className="cta-home-container">
      <div className="cta-home-line"></div>
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
