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
      <div className="animated-img-container">

      <div className="center-square-wrapper">
          <div className="center-square">
            <div className="hero-text skills-text react">
              <h2>React</h2>
            </div>

            <div className="hero-text skills-text javascript">
              <h2>Javascript</h2>
            </div>

            <div className="hero-text skills-text css">
              <h2>CSS</h2>
            </div>

            <div className="hero-text skills-text bootstrap">
              <h2>Bootstrap</h2>
            </div>
          
            <div className="hero-text skills-text uiux">
              <h2>UI/UX</h2>
            </div>

            <div className="skills-text node">
              <h2>Node.js</h2>
            </div>

            <div className="skills-text sql">
              <h2>SQL</h2>
            </div>

            <div className="hero-text skills-text mongodb">
              <h2>MongoDB</h2>
            </div>
          </div>
        </div>

        <div className="animated-img">
          <div class="center-square title-root">
          <div className="hero-text title">
              <h1>Mark Mulligan</h1>
            </div>

            <div className="hero-text developer">
              <h1>Web Developer</h1>
            </div>
          </div>

          <div className="my-row row-0">
            <div className="column-0 square"></div>
            <div className="column-1 square"></div>
            <div className="column-2 square"></div>
            <div className="column-3 square"></div>
            <div className="column-4 square"></div>
            <div className="column-5 square"></div>
            <div className="column-6 square"></div>
            <div className="column-7 square"></div>
            <div className="column-8 square"></div>
          </div>

          <div className="my-row row-1">
            <div className="column-0 square"></div>
            <div className="column-1 square"></div>
            <div className="column-2 square"></div>
            <div className="column-3 square"></div>
            <div className="column-4 square"></div>
            <div className="column-5 square"></div>
            <div className="column-6 square"></div>
            <div className="column-7 square"></div>
            <div className="column-8 square"></div>
          </div>

          <div className="my-row row-2">
            <div className="column-0 square"></div>
            <div className="column-1 square"></div>
            <div className="column-2 square"></div>
            <div className="column-3 square"></div>
            <div className="column-4 square"></div>
            <div className="column-5 square"></div>
            <div className="column-6 square"></div>
            <div className="column-7 square"></div>
            <div className="column-8 square"></div>
          </div>

          <div className="my-row row-3">
            <div className="column-0 square"></div>
            <div className="column-1 square"></div>
            <div className="column-2 square"></div>
            <div className="column-3 square"></div>
            <div className="column-4 square"></div>
            <div className="column-5 square"></div>
            <div className="column-6 square"></div>
            <div className="column-7 square"></div>
            <div className="column-8 square"></div>
          </div>

          <div className="my-row row-4">
            <div className="column-0 square"></div>
            <div className="column-1 square"></div>
            <div className="column-2 square"></div>
            <div className="column-3 square"></div>
            <div className="column-4 square"></div>
            <div className="column-5 square"></div>
            <div className="column-6 square"></div>
            <div className="column-7 square"></div>
            <div className="column-8 square"></div>
          </div>

          <div className="my-row row-5">
            <div className="column-0 square"></div>
            <div className="column-1 square"></div>
            <div className="column-2 square"></div>
            <div className="column-3 square"></div>
            <div className="column-4 square"></div>
            <div className="column-5 square"></div>
            <div className="column-6 square"></div>
            <div className="column-7 square"></div>
            <div className="column-8 square"></div>
          </div>

          <div className="my-row row-6">
            <div className="column-0 square"></div>
            <div className="column-1 square"></div>
            <div className="column-2 square"></div>
            <div className="column-3 square"></div>
            <div className="column-4 square"></div>
            <div className="column-5 square"></div>
            <div className="column-6 square"></div>
            <div className="column-7 square"></div>
            <div className="column-8 square"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
