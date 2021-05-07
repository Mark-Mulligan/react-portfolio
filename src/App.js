import React, { useEffect } from "react";
import Rellax from "rellax";
import "./App.css";
import "./components/sections/HeroSection";
import Navbar from "./components/nav/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  useEffect(() => {
    new Rellax(".slow", {
      // <---- Via class name
      speed: -4,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);
  return (
    <div class="app">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
