import "./GridPicture.css";

const GridPicture = ({ title, description, imgSource, imgAlt}) => {
  return (
    <div className="grid-picture">
      <div className="picture-description">
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      <img
        src={imgSource}
        alt={imgAlt}
      />
    </div>
  );
};

export default GridPicture;
