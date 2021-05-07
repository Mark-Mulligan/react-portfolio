import React, { useEffect, Suspense } from "react";
import Rellax from "rellax";
import "./App.css";
import "./components/sections/HeroSection";
import HeroSection from "./components/sections/HeroSection";
/* import AboutSection from "./components/sections/AboutSection"; */
/* import ProjectsSection from "./components/sections/ProjectsSection"; */
/* import ContactSection from "./components/sections/ContactSection"; */

const AboutSection = React.lazy(() =>
  import("./components/sections/AboutSection")
);
const ProjectsSection = React.lazy(() =>
  import("./components/sections/ProjectsSection")
);
const ContactSection = React.lazy(() =>
  import("./components/sections/ContactSection")
);

function App() {
  useEffect(() => {
    new Rellax(".fast", {
      // <---- Via class name
      speed: 3,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

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
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
}

export default App;
