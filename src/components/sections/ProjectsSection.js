import "./ProjectsSection.css";

const ProjectsSection = () => {
  return (
    <section class="projects-section">
      <div className="container p-5">
        <h2 className="text-center">Projects</h2>
      </div>

      <div className="container projects-container p-0">
        <div className="projects-row">
          <div className="left-picture"></div>
          <div className="right-description">
            <div>
            <h3>Sneakerheads</h3>
            <p>Social Media sight for those that love shoes.</p>
            <div class="project-links-container">
              <div>
                <a href="https://sneaker-heads.herokuapp.com" target="_blank">View Project</a>
              </div>
              <div>
                <a href="https://github.com/hugo2211/Sneaker_Head" target="_blank">Github</a>
              </div>
            </div>
            </div>
            

          </div>
        </div>

        <div className="projects-row">
          <div className="left-picture-2"></div>
          <div className="right-description-2"></div>
        </div>

        <div className="projects-row">
          <div className="left-picture project-2"></div>
          <div className="right-description"></div>
        </div>

        <div className="projects-row">
          <div className="left-picture-2"></div>
          <div className="right-description-2"></div>
        </div>

        
      </div>
    </section>
  );
};

export default ProjectsSection;
