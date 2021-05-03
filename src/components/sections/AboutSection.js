import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="text-center">About</h2>
      </div>
      <div className="container">
      <div className="row text-center">
        <div className="col">
          <h4>Simple</h4>
          <p>Less is more. Only add elements that serve a purpose.</p>
        </div>
        <div className="col">
          <h4>Dynamic</h4>
          <p>Motion creates engagement which is the key to an effective website.</p>
        </div>
        <div className="col">
          <h4>Responsive</h4>
          <p>My designs work on all screens sizes, from mobile to desktop.</p>
        </div>
        <div className="col">
          
          <h4>Stylelish</h4>
          <p>First impressions, especially on the web, are everything.  </p>
        </div>
      </div>
        
      </div>
    </section>
  )
}

export default AboutSection;