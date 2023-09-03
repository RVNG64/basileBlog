import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/footer.module.css';

export default function Footer() {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href='https://www.hellobasile.com/'
        >
          <h2 className="footer__logo">Basile</h2>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href='https://www.hellobasile.com/mentionsLegales'
        >
          Mentions légales
        </a>
        <p>
          © WEVO 2023 - Tous droits réservés <br />
        </p>
      </div>

      <div className="footer-right">
        <button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://www.hellobasile.com/partnership'
          >
            Devenir partenaire
          </a>
        </button>
        <br />
        <a href="mailto:contact@hellobasile.com" target="_blank" rel="noopener noreferrer">
          contact@hellobasile.com
        </a>
      </div>
    </footer>
  );
}

/*
        <div className="social-links">
          <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com"><FaInstagram /></a>
        </div>

        <div className="social-links">
          <a href="mailto:contact@basile.com"></a>
        </div>
        <br />
*/
