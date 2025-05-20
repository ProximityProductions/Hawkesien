import React from "react";
import "./ComingSoon.css";
import Logo from "../../images/logo.png"; // Adjust path as needed

const ComingSoon = () => {
  return (
    <div className="coming-soon-page">
      <div className="coming-soon-container">
        <div className="logo-container">
          <img src={Logo} alt="Skyroot Logo" className="coming-soon-logo" />
        </div>
        
        <div className="content-container" aria-live="polite">
          <h1 className="coming-soon-title">Coming Soon</h1>
          <div className="separator"></div>
          <p className="coming-soon-message">
            We're working hard to bring you something amazing. This section of our website is currently under development.
          </p>
          
          <div className="loading-indicator">
            <div className="dot dot1"></div>
            <div className="dot dot2"></div>
            <div className="dot dot3"></div>
          </div>
          
          <button className="back-button" >
            Return to Previous Page
          </button>
        </div>
      </div>
    </div>
  );
}
export default ComingSoon;
