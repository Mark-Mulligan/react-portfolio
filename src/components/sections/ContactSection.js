import "./ContactSection.css";
import background from "../../images/computerBackground.jpg";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container-fluid contact-title-container text-center p-5">
        <h2 class="section-title">Contact</h2>
      </div>
      <div className="bottom">
        <ul className="contact-links">
          <div class="links-container">
          <li class="linkedin">
            <a>Linkedin</a>
          </li>
          <li class="github">
            <a>Github</a>
          </li>
          <li class="facebook">
            <a>Facebook</a>
          </li>
          <li class="resume">
            <a>Resume</a>
          </li>
          </div>
          
        </ul>
        <div className="right-triangle"></div>
        <div className="center-triangle"></div>
        <img class="contact-img" src={background} />
      </div>
    </section>
  )
}

export default ContactSection;