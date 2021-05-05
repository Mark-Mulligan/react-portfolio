import "./ProjectPanel.css";

const ProjectPanel = ({ cssImgClass, panelType, rightSide, title, description, liveLink, githubLink }) => {
  return (
    <div class="project-panel">
          <div class={`project-image ${cssImgClass}`}></div>
          <div class={`description-background ${panelType}`}>
            <div class={`project-info-wrapper ${rightSide ? 'right-info' : ''}`}>
              <div class="project-info">
                <h3 class="text-center">{title}</h3>
                <p>{description}</p>
                {liveLink || githubLink ? <div class="project-links-container">
                  <div>
                    <a
                      href={liveLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      More Info
                    </a>
                  </div>
                </div> : null}
                
              </div>
            </div>
          </div>
        </div>
  )
}

export default ProjectPanel;