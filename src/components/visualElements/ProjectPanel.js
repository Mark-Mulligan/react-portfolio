import "./ProjectPanel.css";
import ProjectModal from "../../components/modals/ProjectModal";

const ProjectPanel = ({
  cssImgClass,
  panelType,
  rightSide,
  title,
  description,
  longDescription,
  builtWithList,
  videoLink,
  liveLink,
  githubLink,
}) => {
  return (
    <div class="project-panel">
      <div class={`project-image ${cssImgClass}`}></div>
      <div class={`description-background ${panelType}`}>
        <div class={`project-info-wrapper ${rightSide ? "right-info" : ""}`}>
          <div class="project-info">
            <h3 class="text-center">{title}</h3>
            <p>{description}</p>
            {liveLink || githubLink ? (
              <div class="project-links-container">
                <div>
                  <ProjectModal
                    title={title}
                    longDescription={longDescription}
                    builtWithList={builtWithList}
                    liveLink={liveLink}
                    videoLink={videoLink}
                    githubLink={githubLink}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPanel;
