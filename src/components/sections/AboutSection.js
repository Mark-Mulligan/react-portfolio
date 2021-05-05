import "./AboutSection.css";
import PictureGrid from "../visualElements/PictureGird";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="text-center">My Approach</h2>
        <hr />
      </div>

      <PictureGrid />

      <div className="container skills-container">

            <div class="text-center">
              <h3>About</h3>
            </div>

            <p class="bio">
              Hey, I'm Mark, a Front End Developer based in Dallas TX. I love to
              build amazing websites with simple, intuitive user interfaces. I
              am always looking for new things to learn and projects to take on.
              <a href="#" class="light-blue">
                {" "}
                Let's work together.
              </a>
            </p>
       
         
            <div class="text-center mt-5">
              <h3>Skills</h3>
            </div>

            <ul class="skills">
              <div class="d-flex justify-content-center">
                <div>
                  <li>React.js</li>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                </div>
              </div>

              <div class="d-flex justify-content-center">
                <div>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>SQL</li>
                  <li>MongoDB</li>
                </div>
              </div>
            </ul>
       
      </div>
    </section>
  );
};

export default AboutSection;
