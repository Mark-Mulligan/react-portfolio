import { useEffect } from "react";
import Rellax from "rellax";
import './App.css';
import "./components/sections/HeroSection";
import HeroSection from './components/sections/HeroSection';
import QuoteSection from "./components/sections/QuoteSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

function App() {

  useEffect(() => {
    new Rellax(".fast", { // <---- Via class name
      speed: 3,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(".slow", { // <---- Via class name
      speed: -3,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }, []);
  return (
    <div class="app">
      <HeroSection />
      <QuoteSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
