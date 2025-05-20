import { useState, useEffect } from 'react';
import { Check, ChevronRight, Building2, Settings, Cpu } from 'lucide-react';
import './AboutUs.css';
export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set component to visible after mounting
    setIsVisible(true);
    
    // Create orbital animation effect
    const orbitals = document.querySelectorAll('.orbit');
    orbitals.forEach(orbital => {
      orbital.style.animationDuration = `${20 + Math.random() * 30}s`;
    });
  }, []);

  return (
    <div className={`product-showcase ${isVisible ? 'visible' : ''}`}>
      {/* Orbital background effect */}
      <div className="orbital-bg">
        <div className="orbit"></div>
        <div className="orbit"></div>
        <div className="orbit"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            Engineering Precision. Powering Innovation.
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-main">
            <p className="about-description">
              At Hawkstein Technology Pvt. Ltd., we are driven by a singular mission — to empower 
              industries with world-class testing solutions built on precision, innovation, and 
              cutting-edge technology. With deep-rooted expertise in engineering, robotics, and 
              automation, Hawkstein is a trusted partner to sectors where performance matters most 
              — from aviation and automotive to oil & gas and industrial manufacturing.
            </p>
            
            <p className="about-description">
              Our advanced testing machines are designed to simulate real-world conditions with 
              unmatched accuracy, ensuring the safety, durability, and reliability of critical 
              components and systems.
            </p>
            
            <div className="feature-highlights">
              <h3 className="features-title">What sets us apart?</h3>
              <ul className="feature-list">
                <li className="feature-item">
                  <Check className="feature-icon" size={16} />
                  <span>A passion for engineering excellence</span>
                </li>
                <li className="feature-item">
                  <Check className="feature-icon" size={16} />
                  <span>Future-ready automation solutions</span>
                </li>
                <li className="feature-item">
                  <Check className="feature-icon" size={16} />
                  <span>Custom-built systems tailored to your exact needs</span>
                </li>
                <li className="feature-item">
                  <Check className="feature-icon" size={16} />
                  <span>A relentless focus on quality and innovation</span>
                </li>
              </ul>
            </div>
            
            <p className="about-description">
              Our team of engineers, designers, and technologists works at the intersection of 
              science and industry, turning complex challenges into streamlined, automated solutions. 
              Whether you're testing aircraft parts, automotive systems, or industrial components, 
              Hawkstein delivers intelligent machines that think, adapt, and perform — just like 
              your products are meant to.
            </p>
            
            <div className="about-cta">
              <p className="cta-text">Join us in shaping the future of industrial testing.</p>
              <h3 className="cta-tagline">Hawkstein Technology — Where Machines Meet Mastery.</h3>
            </div>
          </div>
          
          <div className="product-grid expertise-grid">
            <div className="product-card" data-index="1">
              <div className="product-content">
                <div className="product-icon">
                  <Building2 />
                </div>
                <h3 className="product-title">Industrial Testing</h3>
                <p className="product-description">
                  Comprehensive testing solutions for manufacturing and industrial applications, ensuring performance under all conditions.
                </p>
              </div>
            </div>
            
            <div className="product-card" data-index="2">
              <div className="product-content">
                <div className="product-icon">
                  <Cpu />
                </div>
                <h3 className="product-title">Automation Systems</h3>
                <p className="product-description">
                  Intelligent automation solutions that streamline processes and enhance productivity across industries.
                </p>
              </div>
            </div>
            
            <div className="product-card" data-index="3">
              <div className="product-content">
                <div className="product-icon">
                  <Settings />
                </div>
                <h3 className="product-title">Custom Engineering</h3>
                <p className="product-description">
                  Tailored engineering solutions designed to meet your specific testing and automation needs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="contact-info">
            <h3 className="contact-title">Our Center</h3>
            <p className="contact-address">
              Ofis Square - 1st & 2nd floor, Ofis Square, The Iconic Corenthum, 
              Plot A41, Sector 62, Noida Gautam Buddha Nagar, Uttar Pradesh - 201301
            </p>
            <div className="contact-action">
              <a href="/contact" className="view-all-button">
                <div className="button-effect"></div>
                <span>Contact Us</span>
                <ChevronRight className="view-all-button-icon" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}