import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`futuristic-header scrolled`}>
      <nav className="nav-bar">
        <div className="site-title">Shrinav Loka's HoloSite</div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">Who I Am</a></li>
          <li><a href="#projects">What I've Built</a></li>
          <li><a href="#contact">Let’s Connect</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
