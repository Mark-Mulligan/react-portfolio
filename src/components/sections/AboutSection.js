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
        <h2 className="text-center">About</h2>
        <hr />
      </div>

      <PictureGrid />
    </section>
  );
};

export default AboutSection;
