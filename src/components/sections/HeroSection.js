import React, { useEffect } from "react";
import anime from "animejs";
import mountains from "../../images/mountainBackground.jpg";
import space from "../../images/space.jpg";
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
      <h1 className="name">Mark Mulligan</h1>
      <h1 className="title">Web Developer</h1>
      <div className="quote-container">
        <p>Making the simple complicated is commonplace. Making the complicated simple, that's creativity.</p>
        <p>- Charles Mingus</p>
      </div>
      <div class="triangle t1 t-background">
        <img className="t1-img t-img slow" src={space} />
      </div>
      <div className="triangle-down t2 t-background">
        <img className="t2-img t-img  slow" src={space} />
      </div>
      <div className="triangle t3">
        <img className="t3-img t-img slow" src={space} />
      </div>
      <div className="triangle-down t4">
        <img className="t4-img t-img slow" src={space} />
      </div>
      <div class="triangle t5 t-background">
        <img className="t5-img t-img  slow" src={space} />
      </div>
      <div class="triangle-down t6 t-background">
        <img className="t6-img t-img slow" src={space} />
      </div>
      <div class="triangle t7 t-background">
        <img className="t7-img t-img slow" src={space} />
      </div>
      <div class="triangle-down t8 t-background">
        <img className="t8-img t-img slow" src={space} />
      </div>
      <div class="triangle t9 t-background">
        <img className="t9-img t-img slow" src={space} />
      </div>
      <div class="triangle-down t10 t-background">
        <img className="t10-img t-img slow" src={space} />
      </div>
      <div class="triangle t11 t-background">
        <img className="t11-img t-img slow" src={space} />
      </div>
      <div class="triangle-down t12 t-background">
        <img className="t12-img t-img slow" src={space} />
      </div>
    </div>
  );
};

export default HeroSection;
