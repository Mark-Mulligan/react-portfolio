import "./ProjectsSection.css";
import ProjectPanel from "../visualElements/ProjectPanel";

const ProjectsSection = () => {
  return (
    <section class="projects-section">
      <div className="container p-5 text-center">
        <h2 className="section-title off-white" id="projects">Projects</h2>
      </div>

      <div class="container projects-container p-0">
        <ProjectPanel
          cssImgClass="project-1"
          title="Sneakerheads"
          description="Social Media sight for those that love shoes."
          liveLink="https://sneaker-heads.herokuapp.com"
          githubLink="https://github.com/hugo2211/Sneaker_Head"
          panelType="top-right-panel"
          rightSide
        />
        <ProjectPanel
          cssImgClass="project-2"
          title="Invoice Generator"
          description="Designed to help private lesson teachers, tutors, and others create invoices."
          liveLink="https://employee-management-system-1.herokuapp.com"
          githubLink="https://github.com/Mark-Mulligan/react-employee-management-system"
          panelType="bottom-right-panel"
          rightSide
        />
        <ProjectPanel 
          cssImgClass="project-3"
          title="Employee Management System"
          description="For all your business administartion needs."
          liveLink="https://employee-management-system-1.herokuapp.com"
          githubLink="https://github.com/Mark-Mulligan/react-employee-management-system"
          panelType="top-right-panel"
          rightSide
        />
         
      </div>
    </section>
  );
};

export default ProjectsSection;
