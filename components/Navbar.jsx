'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../utils/theme';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        <i className="material-icons">menu</i>
      </button>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link href="#home" onClick={() => setMenuOpen(false)}>home</Link>
        <Link href="#projects" onClick={() => setMenuOpen(false)}>projects</Link>
        <Link href="#experience" onClick={() => setMenuOpen(false)}>experience</Link>
        <Link href="#skills" onClick={() => setMenuOpen(false)}>skills</Link>
        <Link href="#education" onClick={() => setMenuOpen(false)}>education</Link>
        <Link href="#contact" onClick={() => setMenuOpen(false)}>contact</Link>
      </div>
      <button className="theme-toggle" aria-label="Cambiar tema" onClick={toggleTheme}>
        <span className="material-icons">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
      </button>
    </nav>
  );
}