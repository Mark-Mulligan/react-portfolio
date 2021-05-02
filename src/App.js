import './App.css';
import "./components/sections/HeroSection";
import HeroSection from './components/sections/HeroSection';
import QuoteSection from "./components/sections/QuoteSection";
import AboutSection from "./components/sections/AboutSection";

function App() {
  return (
    <div class="app">
      <HeroSection />
      <QuoteSection />
      <AboutSection />
    </div>
  );
}

export default App;
