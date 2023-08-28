import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="basileNavbar">
      <div className="basileNavbarLeft">
        <a href="https://www.hellobasile.com/" target="_blank" rel="noopener noreferrer">
          <h1>Basile</h1>
        </a>
        <span className="basileNavbarSeparator">|</span>
        <Link href="/">
          <h3>Blog</h3>
        </Link>
      </div>

      <div className="basileNavbarCenter">
        <button className={`basileNavbarSearchButton ${isSearchOpen ? 'active' : ''}`} onClick={toggleSearch}>
          🔍
        </button>
        <input className={`basileNavbarSearchInput ${isSearchOpen ? 'active' : ''}`} type="text" placeholder="Rechercher..." />
      </div>

      <div className="basileNavbarRight">
        <button className="basileNavbarButton">
          <a href="https://www.hellobasile.com/" target="_blank" rel="noopener noreferrer">
            Tester gratuitement Basile
          </a>
        </button>
      </div>
    </nav>
  );
}
