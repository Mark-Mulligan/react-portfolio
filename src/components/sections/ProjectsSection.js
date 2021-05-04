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
          <div className="right-description"></div>
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
