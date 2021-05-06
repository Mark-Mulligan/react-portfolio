import React, { useEffect } from "react";
import anime from "animejs";
import mountains from "../../images/mountainBackground.jpg";
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
      <div className="side-marker"></div>
      <div className="right-marker"></div>
      <h1 className="name">Mark Mulligan</h1>
      <h1 className="title">Web Developer</h1>
      <div class="triangle t1 t-background">
        <div class="test-background"></div>
      </div>
      <div className="triangle-down t2 t-background"></div>
      <div class="triangle t3 t-background"></div>
      <div class="triangle-down t4 t-background"></div>
      <div class="triangle t5 t-background"></div>
      <div class="triangle-down t6 t-background"></div>
      <div class="triangle t7 t-background"></div>
      <div class="triangle-down t8 t-background"></div>
    </div>
  );
};

export default HeroSection;
