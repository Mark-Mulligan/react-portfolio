import React, { useEffect } from "react";
import anime from "animejs";
import "./HeroSection.css";

const HeroSection = () => {
  const animatedImage = () => {
    let timeline = anime.timeline({ loop: true });

    timeline
      .add({
        targets: ".square",
        opacity: [
          { value: 0.5, easing: "easeInSine", duration: 500 },
          { value: 1, easing: "easeInOutQuad", duration: 1000 },
        ],
        scale: [
          { value: 0.92, easing: "easeInSine", duration: 500 },
          { value: 1, easing: "easeInOutQuad", duration: 1000 },
        ],
        delay: anime.stagger(330, { grid: [9, 7], from: "first" }),
      })
      .add({
        targets: ".square",
        opacity: [
          { value: 0.5, easing: "easeInSine", duration: 500 },
          { value: 1, easing: "easeInOutQuad", duration: 1000 },
        ],
        scale: [
          { value: 0.92, easing: "easeInSine", duration: 500 },
          { value: 1, easing: "easeInOutQuad", duration: 1000 },
        ],
        delay: anime.stagger(330, { grid: [9, 7], from: "last" }),
      })
      .add({
        targets: ".square",
        opacity: [
          { value: 0.5, easing: "easeInSine", duration: 500 },
          { value: 1, easing: "easeInOutQuad", duration: 1000 },
        ],
        scale: [
          { value: 0.92, easing: "easeInSine", duration: 500 },
          { value: 1, easing: "easeInOutQuad", duration: 1000 },
        ],
        delay: anime.stagger(330, { grid: [9, 7], from: "center" }),
      });
  };

  useEffect(() => {
    animatedImage(); 
  }, []);

  return (
    <div className="hero-section">
      
           
    </div>
  );
};

export default HeroSection;
