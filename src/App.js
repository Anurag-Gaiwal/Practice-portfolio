import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/navBar';

function App() {
  return (
    <div>
      <Navbar/>
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
