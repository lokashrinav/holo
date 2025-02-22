import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`futuristic-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-bar">
        <div className="site-title">HoloSite</div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Who I Am</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>What I've Built</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Let’s Connect</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
