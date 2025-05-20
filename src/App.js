import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Products from "./components/Products/Products";
import AboutUs from "./components/AboutUs/AboutUs";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Products />
      <Footer/>
    </>
  );
}

export default App;
