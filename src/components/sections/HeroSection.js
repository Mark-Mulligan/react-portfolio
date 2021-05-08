import space from "../../images/spaceCompressed3.jpg";
import row1col1 from "../../images/space-row1-col1-(2X4).jpg";
import row1col2 from "../../images/space-row1-col2-(2X4).jpg";
import row1 from "../../images/space-row1-(1X3).jpg";
import tophalf from "../../images/space-row1-col1-(1X2).jpg";
import lefthalf from "../../images/space-row1-col1-(2X1).jpg";
import "./HeroSection.css";

const HeroSection = () => {

  return (
    <div className="hero-section">
      <h1 className="name">MARK MULLIGAN</h1>
      <h1 className="title">WEB DEVELOPER</h1>
      <div className="quote-container">
        <p>Making the simple complicated is commonplace. Making the complicated simple, that's <span className="orange">creativity.</span></p>
        <p>- Charles Mingus</p>
      </div>
      <div class="triangle t1 t-background">
        <img className="t1-img t-img slow" alt="" src={row1col1} />
      </div>
      <div className="triangle-down t2 t-background">
        <img className="t2-img t-img  slow" alt="" src={row1} />
      </div>
      <div className="triangle t3">
        <img className="t3-img t-img slow" alt="" src={row1} />
      </div>
      <div className="triangle-down t4">
        <img className="t4-img t-img slow" alt="" src={row1col2} />
      </div>
      <div class="triangle t5 t-background">
        <img className="t5-img t-img  slow" alt="" src={row1} />
      </div>
      <div class="triangle-down t6 t-background">
        <img className="t6-img t-img slow" alt="" src={space} />
      </div>
      <div class="triangle t7 t-background">
        <img className="t7-img t-img slow" alt="" src={tophalf} />
      </div>
      <div class="triangle-down t8 t-background">
        <img className="t8-img t-img slow" alt="" src={space} />
      </div>
      <div class="triangle t9 t-background">
        <img className="t9-img t-img slow" alt="" src={lefthalf} />
      </div>
      <div class="triangle-down t10 t-background">
        <img className="t10-img t-img slow" alt="" src={lefthalf} />
      </div>
      <div class="triangle t11 t-background">
        <img className="t11-img t-img slow" alt="" src={lefthalf} />
      </div>
      <div class="triangle-down t12 t-background">
        <img className="t12-img t-img slow" alt="" src={lefthalf} />
      </div>
    </div>
  );
};

export default HeroSection;
