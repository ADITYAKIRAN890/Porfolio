import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: 'var(--accent-color)' }}>●</span> ADITYA
        </Link>
      </div>
      {isContactPage ? (
        <div className="nav-links"></div>
      ) : (
        <div className="nav-links">
          <a href="/#about" className="nav-link">About</a>
          <a href="/#work" className="nav-link">Work</a>
          <a href="/#skills" className="nav-link">Skills</a>
        </div>
      )}

      {isContactPage ? (
        <Link to="/" className="nav-cta">Home</Link>
      ) : (
        <Link to="/contact" className="nav-cta">Let's Talk</Link>
      )}
    </nav>
  );
};

export default Navbar;
