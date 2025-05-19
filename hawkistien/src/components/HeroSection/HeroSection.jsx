import bg from "../../images/background.jpg";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-background">
        <img
          src={bg}
          alt="Background"
          className="hero-image"
        />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-heading">Design to Dominate</h1>
          <div className="separator-line"></div>
          <p className="hero-subheading">
          We craft high-performance machine solutions that drive real-world success—delivering precision, productivity, and impact from concept to commissioning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;