const ProjectPanelTop = ({ cssProjectClass }) => {
  return (
    <div class="project-panel">
          <div class={`project-image ${cssProjectClass}`}></div>
          <div class="description-background">
            <div class="project-info-wrapper">
              <div class="project-info">
                <h3 class="text-center">Sneakerheads</h3>
                <p>Social Media sight for those that love shoes.</p>
                <div class="project-links-container">
                  <div>
                    <a
                      href="https://sneaker-heads.herokuapp.com"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/hugo2211/Sneaker_Head"
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ProjectPanelTop;