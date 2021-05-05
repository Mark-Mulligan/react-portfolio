import "./ProjectPanel.css";

const ProjectPanel = ({ cssProjectClass, title, description, liveLink, githubLink, bottom }) => {
  return (
    <div class="project-panel">
          <div class={`project-image ${cssProjectClass}`}></div>
          <div class={`description-background ${bottom ? 'bottom-panel' : 'top-panel'}`}>
            <div class="project-info-wrapper">
              <div class="project-info">
                <h3 class="text-center">{title}</h3>
                <p>{description}</p>
                <div class="project-links-container">
                  <div>
                    <a
                      href={liveLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ProjectPanel;