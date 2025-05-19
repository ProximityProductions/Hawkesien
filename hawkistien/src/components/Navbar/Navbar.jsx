import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../../images/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <a href="/" className="logo-link">
              {/* If your logo is already an image with text embedded */}
              <img 
                src={Logo} 
                alt="Skyroot Logo" 
                className="logo-image"
                width={150}
                height={150}
              />
              {/* If you need separate text alongside or instead of the logo image */}
              {/* <span className="logo-text">Skyroot</span> */}
            </a>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="desktop-nav">
            <div className="nav-links">
              <a href="/" className="nav-link">Home</a>
              <a href="/about" className="nav-link">About Us</a>
              
              {/* Products dropdown */}
              <div className="dropdown-container">
                <button 
                  className="nav-link dropdown-toggle"
                  onClick={() => toggleDropdown('products')}
                  onMouseEnter={() => setActiveDropdown('products')}
                >
                  Products
                  <svg 
                    className={`dropdown-arrow ${activeDropdown === 'products' ? 'active' : ''}`} 
                    width="10" 
                    height="6" 
                    viewBox="0 0 10 6" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div 
                  className={`dropdown-menu ${activeDropdown === 'products' ? 'active' : ''}`}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a href="/products/gas-decanting" className="dropdown-item">Gas Decanting</a>
                  <a href="/products/boosting-storage" className="dropdown-item">Boosting and Storage System</a>
                  <a href="/products/helium-leak-test" className="dropdown-item">Helium Leak Test</a>
                  <a href="/products/gas-generation" className="dropdown-item">Gas Generation System</a>
                  <a href="/products/3axis-robotics" className="dropdown-item">3axis Robotics System</a>
                  <a href="/products/automated-conveyor" className="dropdown-item">Automated Conveyor System</a>
                  <a href="/products/valve-test-rig" className="dropdown-item">Valve Test Rig</a>
                  <a href="/products/hydraulics-flushing" className="dropdown-item">Hydraulics Flushing Rig</a>
                  <a href="/products/cryogenic-system" className="dropdown-item">Cryogenic System</a>
                </div>
              </div>
              
              {/* Industries dropdown */}
              <div className="dropdown-container">
                <button 
                  className="nav-link dropdown-toggle"
                  onClick={() => toggleDropdown('industries')}
                  onMouseEnter={() => setActiveDropdown('industries')}
                >
                  Industries
                  <svg 
                    className={`dropdown-arrow ${activeDropdown === 'industries' ? 'active' : ''}`} 
                    width="10" 
                    height="6" 
                    viewBox="0 0 10 6" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div 
                  className={`dropdown-menu ${activeDropdown === 'industries' ? 'active' : ''}`}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a href="/industries/aviation" className="dropdown-item">Aviation</a>
                  <a href="/industries/railways" className="dropdown-item">Railways</a>
                  <a href="/industries/automobiles" className="dropdown-item">AutoMobiles</a>
                  <a href="/industries/research-development" className="dropdown-item">Research & Development</a>
                  <a href="/industries/semi-conductors" className="dropdown-item">Semi Conductors</a>
                </div>
              </div>
              
              <a href="/careers" className="nav-link">Careers</a>
              <a href="/contact" className="nav-link">Contact Us</a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <button onClick={toggleMenu} className="menu-toggle">
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke={isScrolled ? "white" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke={isScrolled ? "white" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21" stroke={isScrolled ? "white" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6H21" stroke={isScrolled ? "white" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 18H21" stroke={isScrolled ? "white" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
          <a href="/about" className="mobile-nav-link">About Us</a>
          
          {/* Mobile Products Dropdown */}
          <div className="mobile-dropdown">
            <button 
              className="mobile-dropdown-toggle"
              onClick={() => toggleDropdown('mobile-products')}
            >
              Products
              <svg 
                className={`mobile-dropdown-arrow ${activeDropdown === 'mobile-products' ? 'active' : ''}`} 
                width="10" 
                height="6" 
                viewBox="0 0 10 6" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`mobile-dropdown-menu ${activeDropdown === 'mobile-products' ? 'active' : ''}`}>
              <a href="/products/gas-decanting" className="mobile-dropdown-item">Gas Decanting</a>
              <a href="/products/boosting-storage" className="mobile-dropdown-item">Boosting and Storage System</a>
              <a href="/products/helium-leak-test" className="mobile-dropdown-item">Helium Leak Test</a>
              <a href="/products/gas-generation" className="mobile-dropdown-item">Gas Generation System</a>
              <a href="/products/3axis-robotics" className="mobile-dropdown-item">3axis Robotics System</a>
              <a href="/products/automated-conveyor" className="mobile-dropdown-item">Automated Conveyor System</a>
              <a href="/products/valve-test-rig" className="mobile-dropdown-item">Valve Test Rig</a>
              <a href="/products/hydraulics-flushing" className="mobile-dropdown-item">Hydraulics Flushing Rig</a>
              <a href="/products/cryogenic-system" className="mobile-dropdown-item">Cryogenic System</a>
            </div>
          </div>
          
          {/* Mobile Industries Dropdown */}
          <div className="mobile-dropdown">
            <button 
              className="mobile-dropdown-toggle" 
              onClick={() => toggleDropdown('mobile-industries')}
            >
              Industries
              <svg 
                className={`mobile-dropdown-arrow ${activeDropdown === 'mobile-industries' ? 'active' : ''}`} 
                width="10" 
                height="6" 
                viewBox="0 0 10 6" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`mobile-dropdown-menu ${activeDropdown === 'mobile-industries' ? 'active' : ''}`}>
              <a href="/industries/aviation" className="mobile-dropdown-item">Aviation</a>
              <a href="/industries/railways" className="mobile-dropdown-item">Railways</a>
              <a href="/industries/automobiles" className="mobile-dropdown-item">AutoMobiles</a>
              <a href="/industries/research-development" className="mobile-dropdown-item">Research & Development</a>
              <a href="/industries/semi-conductors" className="mobile-dropdown-item">Semi Conductors</a>
            </div>
          </div>
          
          <a href="/careers" className="mobile-nav-link">Careers</a>
          <a href="/contact" className="mobile-nav-link">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;