import "./ProjectsSection.css";

const ProjectsSection = () => {
  return (
    <section class="projects-section">
      <div className="container p-5">
        <h2 className="text-center">Projects</h2>
      </div>

      <div class="container projects-container p-0">
        <div class="project-row">
          <div class="background-image-test"></div>
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

        <div class="project-row">
          <div class="background-image-test project-2"></div>
          <div class="description-background background-2">
          <div class="project-info-wrapper">
              <div class="project-info">
                <h3 class="text-center">Invoice Generator</h3>
                <p>Designed to help private lesson teachers, tutors, and others who
              manage a studio of students.</p>
                <div class="project-links-container">
                  <div>
                  <a href="https://employee-management-system-1.herokuapp.com/" target="_blank">View Project</a>
                  </div>
                  <div>
                  <a href="https://github.com/Mark-Mulligan/react-employee-management-system" target="_blank">Github</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="project-row">
          <div class="background-image-test project-3"></div>

          <div class="description-background">
            <div class="project-info-wrapper">
              <div class="project-info">
                <h3 class="text-center">Employee Management System</h3>
                <p>For all your business administartion needs.</p>
                <div class="project-links-container">
                  <div>
                  <a href="https://employee-management-system-1.herokuapp.com/" target="_blank">View Project</a>
                  </div>
                  <div>
                  <a href="https://github.com/Mark-Mulligan/react-employee-management-system" target="_blank">Github</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
