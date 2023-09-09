import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/goUpComponent.module.css';

export default function GoUpComponent() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="goUpComponentContainer">
      <div className="goUpComponent__backToList">
          <a className="goUpComponent__backToListLink" href="/">
            Retour à la liste des articles
          </a>
      </div>
      <div className="goUpComponent__goUpButtonContainer">
        <button onClick={scrollToTop} className="goUpComponent__goUpButtonLink">
          Retour en haut de page
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
};
