import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../images/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <a href="/" className="logo-link">
              <img 
                src={Logo} 
                alt="Skyroot Logo" 
                className="logo-image"
                width={150}
                height={100}
              />
            </a>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="desktop-nav">
            <div className="nav-links">
              <a href="/" className="nav-link">Home</a>
              <a href="/about" className="nav-link">About</a>
              <a href="/vehicles" className="nav-link">Vehicles</a>
              <a href="/careers" className="nav-link">Careers</a>
              <a href="/media" className="nav-link">Media</a>
              <a href="/contact" className="nav-link">Contact</a>
              <a href="/booklaunch" className="cta-button">Book a Launch</a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <button onClick={toggleMenu} className="menu-toggle">
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <a href="/" className="mobile-nav-link">Home</a>
          <a href="/about" className="mobile-nav-link">About</a>
          <a href="/vehicles" className="mobile-nav-link">Vehicles</a>
          <a href="/careers" className="mobile-nav-link">Careers</a>
          <a href="/media" className="mobile-nav-link">Media</a>
          <a href="/contact" className="mobile-nav-link">Contact</a>
          <a href="/booklaunch" className="mobile-cta-button">Book a Launch</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;