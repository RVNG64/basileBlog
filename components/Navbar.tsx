import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { articleList } from './articles/articleList';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navbarRef = useRef(null);

  const resetSearch = () => {
    setSearchTerm('');
    setShowDropdown(false);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        setShowDropdown(false); // Fermer le menu déroulant
        resetSearch(); // Réinitialiser la recherche
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const results = articleList.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.join(', ').toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(results);
  }, [searchTerm]);

  return (
    <nav className="basileNavbar" ref={navbarRef}>
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
        <input
          className={`basileNavbarSearchInput ${isSearchOpen ? 'active' : ''}`}
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
          }}
        />
        <div className="searchDropdownContainer">
          {showDropdown && (
            <div className="searchDropdown">
              {filteredArticles.map(article => (
                <Link key={article.slug} href={`/articles/${article.slug}`} onClick={resetSearch}>
                    <div>
                      <h4>{article.title}</h4>
                    </div>
                </Link>
              ))}
            </div>
          )}
        </div>
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
