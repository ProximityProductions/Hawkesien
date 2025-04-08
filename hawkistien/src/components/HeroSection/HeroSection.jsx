import React from "react";
import "./HeroSection.css";
import bg from "../../images/background.jpeg";
const HeroSection = () => {
  return (
    //background image container
    <img
      src={bg}
        alt="Background"
        className="hero-container"
    />
  );
};

export default HeroSection;
