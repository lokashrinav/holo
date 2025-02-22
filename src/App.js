import React from 'react';
import {useEffect} from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import ReactGA from "react-ga4";
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import ParticlesBackground from "./components/ParticlesBackground";

import './styles/globals.css';
import './styles/hologram.css';

const TRACKING_ID = "G-8ZN2TMXT74";

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send("pageview");
  }, []);
  return (
    <div className="App">
      <ParticlesBackground />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
