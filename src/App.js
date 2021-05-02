import './App.css';
import "./components/sections/HeroSection";
import HeroSection from './components/sections/HeroSection';
import AboutSection from "./components/sections/AboutSection";

function App() {
  return (
    <div class="app">
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default App;
