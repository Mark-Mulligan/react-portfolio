import "./ContactSection.css";
import background from "../../images/computerBackground2.jpg";

const ContactSection = () => {
  return (
    <section className="contact-section off-white">
      <div className="container-fluid contact-title-container text-center p-5">
        <h2 class="section-title" id="contact">
          Contact
        </h2>
      </div>
      <div className="bottom">
        <ul className="contact-links">
          <div class="links-container">
            <li class="linkedin">
              <a
                href="https://www.linkedin.com/in/mark-mulligan-50"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li class="github">
              <a
                href="https://github.com/Mark-Mulligan"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li class="facebook">
              <a
                href="https://www.facebook.com/mark.mulligan.5264"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li class="resume">
              <a
                href="../../images/MarkMulliganFrontEndDeveloper.pdf"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </div>
        </ul>
        <div className="triangle-wrapper">
          <div className="center-triangle"></div>
        </div>
        <img class="contact-img" alt="glowing computer" src={background} />
      </div>
    </section>
  );
};
/* <img class="contact-img" src={background} /> */
export default ContactSection;
