import React, { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import styles from '../../../styles/articles/articlesCss.module.css';

interface ShareArticleProps {
  closeModal: () => void;
  isModalOpen: boolean;
  modalRef: React.RefObject<HTMLDivElement>;
}

export default function ShareArticle({ closeModal, isModalOpen, modalRef }: ShareArticleProps) {
  const [showAlert, setShowAlert] = useState(false);

  const shareArticle = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const shareFacebook = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(url)}`);
  };

  const shareTwitter = () => {
    const url = window.location.href;
    const text = "Découvrez cet article de Basile : ";
    window.open(`https://twitter.com/intent/tweet?url=${encodeURI(url)}&text=${encodeURI(text)}`);
  };

  const shareLinkedIn = () => {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURI(url)}`);
  };

  // Partager par email
  const shareEmail = () => {
    const url = window.location.href;
    const subject = "Découvrez cet article de Basile";
    const body = "Salut ! J'ai pensé que cet article pourrait t'intéresser : ";
    window.open(`mailto:?subject=${encodeURI(subject)}&body=${encodeURI(body)}${encodeURI(url)}`);
  };

  return (
    <div className={`Basile__share-modal ${isModalOpen ? 'open' : ''}`}>
      <div className="Basile__share-modal-content" ref={modalRef}>
        <h2>Partager cet article</h2>
        <button className="share-close-button" onClick={closeModal}>&times;</button>
        <button onClick={shareArticle}>Copier le lien du Blog Basile</button>
        <div onClick={shareFacebook} className="Basile__socialLogo">
          <FaFacebookF />
        </div>
        <div onClick={shareTwitter} className="Basile__socialLogo">
          <FaTwitter />
        </div>
        <div onClick={shareLinkedIn} className="Basile__socialLogo">
          <FaLinkedinIn />
        </div>
        <div onClick={shareEmail} className="Basile__socialLogo">
          <FaEnvelope />
        </div>
      </div>

      {showAlert && (
        <div className={`Basile__copied-alert ${showAlert ? 'show' : ''}`}>
          Lien copié dans le presse-papier !
        </div>
      )}

    </div>
  );
}
