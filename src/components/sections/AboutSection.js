import "./AboutSection.css";
import responsiveExample from "../../images/responsiveExample.jpg";
import dynamic from "../../images/dynamic.jpg";
import simpleImg from "../../images/simplicity.jpg";
import stylishPicture from "../../images/stylishPicture.jpg";
import PictureGrid from "../visualElements/PictureGird";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="text-center">My Approach</h2>
        <hr />
      </div>

      <PictureGrid />

      <div className="container">
        <div class="row">
          <div class="col">
            <h3 class="text-center">About</h3>
            <p class="bio">
              Hey, I'm Mark, a Front End Developer based in Dallas TX. I love to
              build amazing websites with simple, intuitive user interfaces. I
              am always looking for new things to learn and projects to take on.
              Let's work together.
            </p>
          </div>
          <div class="col">
            <h3 class="text-center">Skills</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
