import responsiveExample from "../../images/responsiveExample.jpg";
import dynamic from "../../images/dynamic.jpg";
import simpleImg from "../../images/simplicity.jpg";
import stylishPicture from "../../images/stylishPicture.jpg";
import GridPicture from "./GridPicture";
import "./PictureGrid.css";

const PictureGrid = () => {
  return (
    <div className="container picture-grid">
      <GridPicture
        title="Responsive"
        description="My designs work on all screen sizes, from mobile to desktop"
        imgSource={responsiveExample}
        imgAlt={"computer phone and tablet screens."}
      />
      <GridPicture 
        title="Dynamic"
        description="Motion creates engagement which is the key to an effective website"
        imgSource={dynamic}
        alt="Water splash freeze frame."
      />
      <GridPicture 
        title="Stylish"
        description="First impressions, especially on the web, are everything."
        imgSource={stylishPicture}
        alt="Amazing painting."
      />
      <GridPicture 
        title="Simple"
        description="Less is more. Only add elements that serve a purpose."
        imgSource={simpleImg}
        alt="Steve jobs simplicity."
      />
    </div>
  );
};

export default PictureGrid;
