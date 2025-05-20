// Products.jsx
import React, { useEffect, useRef, useState } from 'react';
import Icon from '@mdi/react';
import { 
  mdiGasCylinder,
  mdiTank, 
  mdiRobotIndustrial, 
  mdiMagnify, 
  mdiSnowflake, 
  mdiAbTesting,
  // mdiCheck,
  mdiArrowRight
} from '@mdi/js';
import './Products.css';
import gasBoosting from '../../images/gasBoosting.jpeg';
import NitrogenTrolly from '../../images/NitrogenTrolly.jpeg';
import Robotics from '../../images/Robotics.jpeg';
import LeakTesting from '../../images/LeakTesting.jpg';
import GenicSystem from '../../images/GenicSystem.png';
import Conveyer from '../../images/Conveyor.jpeg';

const products = [
  {
    id: 1,
    title: 'Gas Boosting System',
    description: 'Innovative gas boosting system designed for high efficiency and reliability, featuring real-time monitoring and advanced safety protocols.',
    image: gasBoosting,
    icon: <Icon path={mdiGasCylinder} size={1.2} />,
    badge: 'Industrial'
  },
  {
    id: 2,
    title: 'Nitrogen & Oxygen Trolley',
    description: 'A compact, high pressure solution designed to boost nitrogen from standard cylinders up to 6000PSI.',
    image: NitrogenTrolly,
    icon: <Icon path={mdiTank} size={1.2} />,
    badge: 'Portable'
  },
  {
    id: 3,
    title: 'Robotics Solutions',
    description: 'Turnkey robotics solutions streamline manufacturing, improve consistency and reduce downtime with advanced automation.',
    image: Robotics,
    icon: <Icon path={mdiRobotIndustrial} size={1.2} />,
    badge: 'Automation'
  },
  {
    id: 4,
    title: 'Leak Testing Machine',
    description: 'Our testing machine, using pure helium & combination of Nitrogen/Air detects leaks as small as 1×10⁻⁹ atm cc/sec up to 350 bar.',
    image: LeakTesting,
    icon: <Icon path={mdiMagnify} size={1.2} />,
    badge: 'Precision'
  },
  {
    id: 5,
    title: 'Cryogenic Solutions',
    description: 'The HWAK-10KL-Cryo-O2/N2 is a 10KL cryogenic storage tank for liquid oxygen and nitrogen, ensuring reliable storage at optimal temperatures and pressures.',
    image: GenicSystem,
    icon: <Icon path={mdiSnowflake} size={1.2} />,
    badge: 'Storage',

  },
  {
    id: 6,
    title: 'Modular Conveyor System',
    description: 'Designed for e-commerce, logistics, manufacturing, and warehousing, they offer plug-and-play simplicity or tailored flexibility for automation.',
    image: Conveyer,
    icon: <Icon path={mdiAbTesting} size={1.2} />,
    badge: 'Logistics'
  },
];

const Products = () => {
  const showcaseRef = useRef(null);
  const productRefs = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseFollowRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Add visible class to showcase after component mounts
    const showcase = showcaseRef.current;
    if (showcase) {
      setTimeout(() => {
        showcase.classList.add('visible');
      }, 300);
    }

    // Set up intersection observer for card animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all product cards
    productRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    // Mouse follow effect
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (mouseFollowRef.current) {
        mouseFollowRef.current.style.opacity = '1';
        mouseFollowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      productRefs.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Add tilt effect to card
  const handleMouseMove = (e, index) => {
    const card = productRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / 30;
    const tiltY = (centerX - x) / 30;
    
    // Add subtle scale effect
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-5px) scale(1.01)`;
    
    // Expand the mouse follow element when hovering over a card
    if (mouseFollowRef.current) {
      mouseFollowRef.current.style.width = '60px';
      mouseFollowRef.current.style.height = '60px';
      mouseFollowRef.current.style.background = 'rgba(255,255,255,0.05)';
    }
    
    setIsHovering(true);
  };

  const handleMouseLeave = (index) => {
    const card = productRefs.current[index];
    if (!card) return;
    
    card.style.transform = '';
    setTimeout(() => {
      card.style.transition = 'var(--transition-slow)';
    }, 100);
    
    // Reset the mouse follow element
    if (mouseFollowRef.current) {
      mouseFollowRef.current.style.width = '30px';
      mouseFollowRef.current.style.height = '30px';
      mouseFollowRef.current.style.background = 'rgba(255,255,255,0.1)';
    }
    
    setIsHovering(false);
  };

  const handleMouseEnter = (index) => {
    const card = productRefs.current[index];
    if (!card) return;
    
    setTimeout(() => {
      card.style.transition = 'none';
    }, 300);
  };

  return (
    <section className="product-showcase" ref={showcaseRef}>
      {/* Grid background */}
      <div className="grid-bg"></div>
      
      {/* Floating elements for visual interest */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      
      {/* Mouse follow effect */}
      <div 
        className="mouse-follow" 
        ref={mouseFollowRef}
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      ></div>
      
      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <h2 className="section-title">Industrial Solutions</h2>
          <p className="section-subtitle">
            Discover our innovative industrial solutions designed to transform your operations with cutting-edge technology and reliable performance.
          </p>
        </div>
        
        {/* Product grid */}
        <div className="product-grid">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="product-card" 
              data-index={index + 1}
              ref={el => productRefs.current[index] = el}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div className="product-image">
                <img src={product.image || `/api/placeholder/600/400`} alt={product.title} />
                {product.badge && <span className="product-badge">{product.badge}</span>}
              </div>
              <div className="product-content">
                <div className="product-header">
                  <div className="product-icon">
                    {product.icon}
                  </div>
                </div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
{/*                 
                {product.features && (
                  <div className="product-features">
                    <ul className="feature-list">
                      {product.features.map((feature, i) => (
                        <li key={i} className="feature-item">
                          <Icon path={mdiCheck} size={0.7} className="feature-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )} */}
                
                <div className="product-action">
                  <a href="#" className="product-button">
                    <div className="button-effect"></div>
                    <span>
                      Learn More
                      <Icon path={mdiArrowRight} size={0.8} className="button-icon" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all products button */}
        <div className="view-all-container">
          <a href="#" className="view-all-button">
            <div className="button-effect"></div>
            <span>
              View All Products
              <Icon path={mdiArrowRight} size={1} className="view-all-button-icon" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;