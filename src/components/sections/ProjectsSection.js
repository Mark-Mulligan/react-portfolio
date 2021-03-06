import './ProjectsSection.css';
import ProjectPanel from '../visualElements/ProjectPanel';
import { isMobile } from 'react-device-detect';

const ProjectsSection = () => {
  return (
    <section class="projects-section">
      <div className={`${isMobile ? 'transition-background' : ''} p-5 text-center`}>
        <h2 className="section-title off-white" id="projects">
          Projects
        </h2>
      </div>

      <div class="container projects-container p-0">
        <ProjectPanel
          cssImgClass="project-1"
          title="Better Music"
          description="A great source for new music."
          longDescription="I built this project to learn Next.js while taking the opportunity to work on my UI/UX design skills.  I heard great things about Next and after using it, I am hooked.  Static generation was perferct for this site along with dynamic routing.  The image optiomization was extremly useful as well.  As a bouns, I challegned my self to build everything from scratch.  No additional libraries or packages were used in building this project.  I learned a ton from doing this and am glad I took the oppurtuniy to do so."
          builtWithList="Next.js, CSS modules, Style and Components custom made - no libraries used"
          liveLink="https://bettermusic.netlify.app/"
          githubLink="https://github.com/Mark-Mulligan/better-music"
          panelType="top-right-panel"
          rightSide
        />
        <ProjectPanel
          cssImgClass="project-2"
          title="Outdoor Adventures"
          description="Your guide to the US's national parks."
          longDescription="I am an active person and always enjoyed spending time outdoors. I designed this application to help search through and find detailed information on all the national parks in the United States. While building this project, I was able to incorporate a lot of different programming concepts that I wanted to explore. This project features server side pagination, redux state management and using library styled components to handle all css styling and complying. It is a fully stack application that is completly responsive."
          builtWithList="Redux (using Redux Toolkit), Styled Components, React.js, Node.js, MySQL, Bootstrap, React Google Maps, National Parks API"
          liveLink="https://outdoor-adventures1.netlify.app"
          githubLink="https://github.com/Mark-Mulligan/outdoor-adventures-frontend-v1.0"
          panelType="bottom-right-panel"
          rightSide
        />
        <ProjectPanel
          cssImgClass="project-3"
          title="Invoice Generator"
          description="Designed to help private lesson teachers, tutors, and others create invoices."
          longDescription={`I built this application for one of my friends who is a private music teacher. He spends a lot of time putting together invoices for the parents of the students he teachers each month. This program is designed to streamline that process. I also included a way to save and organize a roster of students. This data is present to the user in the form of table to can be easily searched and sorted. I used google oauth to login in the users, mongoDB to store all the nessary data, and the react-pdf package to create and generate professional invoices that can be downloaded and used as needed.`}
          builtWithList="React.js, Node.js, MongoDB, Bootstrap, React-PDF"
          videoLink="https://youtu.be/ofsShzbOSEA"
          githubLink="https://github.com/Mark-Mulligan/invoice-gen"
          panelType="top-right-panel"
          rightSide
        />
        <ProjectPanel
          cssImgClass="project-4"
          title="Sneakerheads"
          description="Social Media sight for those that love shoes."
          longDescription="Sneakerheads is an online forum for shoe collectors to share their collections or to buy/trade shoes from other collectors. Additionally, users are able to chat with their fellow Sneakerheads in the app. A feed page shows all uploads from other users. If you'd like to review a certain user's page, you can click on their name from the feed page."
          builtWithList="Express, React JS, Node JS, Material UI, React Chat App, React-Bootstrap, MySQL (via MySQL Workbench), JAWSDB, JSON Webtoken"
          liveLink="https://sneaker-heads.herokuapp.com"
          githubLink="https://github.com/hugo2211/Sneaker_Head"
          panelType="bottom-right-panel"
          rightSide
        />
        <ProjectPanel
          cssImgClass="project-5"
          title="Employee Management System"
          description="For all your business administartion needs."
          longDescription="This app was designed to create a system for the employee data for a compoany. It includes tables with detailed information about the employees in the companay, roles that exists, and the departments within the compnay. It also has a data analytics section that displays charts and graph about generally information and trends within the employee data. This application is a full stack application that uses mySQL to store the data, an express server built on Node.js on the backend, React.js on the front end and Passport for authentication. This application also uses React-Chart.js 2 to assist with the data animations."
          builtWithList="React.js, Node.js, MySQL, Passport.js, React-Chart.js Bootstrap"
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
