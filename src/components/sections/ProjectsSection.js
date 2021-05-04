import "./ProjectsSection.css";

const ProjectsSection = () => {
  return (
    <section class="projects-section">
      <div className="container p-5">
        <h2 className="text-center">Projects</h2>
      </div>

      <div class="fixed-background project-1-image">
        <div class="project-description">
          <div class="fade-in-out-effect description-text-container">
            <h2>SneakerHeads</h2>
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
    </section>
  )
}

export default ProjectsSection;