import "./AboutSection.css";
import ProjectPanel from "../visualElements/ProjectPanel";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container text-center p-5">
        <h2 className="section-title off-white" id="my-approach">My Approach</h2>
      </div>

      <div class="container projects-container p-0">
        <ProjectPanel
          cssImgClass="responsive-image"
          title="Responsive"
          description="My designs work on all screen sizes from desktop to mobile."
          panelType="top-left-panel"
        />
        <ProjectPanel
          cssImgClass="dynamic-image"
          title="Dynamic"
          description="Motion creates engagement which is the key to an effective website."
          panelType="bottom-left-panel"
        />
        <ProjectPanel 
          cssImgClass="stylish-image"
          title="Stylish"
          description="First impressions, especially on the web, are everything."
          panelType="top-left-panel"
        />
        <ProjectPanel 
          cssImgClass="simple-image"
          title="Simple"
          description="Less is more. Only add elements that serve a purpose."
          panelType="bottom-left-panel"
        />
         
      </div>

      <div className="container skills-container">

            <div class="text-center">
              <h2 class="section-title off-white" id="about">About</h2>
            </div>

            <p class="bio off-white">
              Hey, I'm Mark, a Front End Developer based in Dallas TX. I love to
              build amazing websites with simple, intuitive user interfaces. I
              am always looking for new things to learn and projects to take on.
              <a href="#" class="light-blue">
                {" "}
                Let's work together.
              </a>
            </p>
       
         
            <div class="text-center mt-5">
              <h2 class="section-title off-white">Skills</h2>
            </div>

            <ul class="skills off-white">
              <div class="d-flex justify-content-center off-white">
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
