import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container-fluid">
        <h2 class="text-center">Contact</h2>
      </div>
      <div className="bottom">
        <ul className="contact-links">
          <li>
            <a>Linkedin</a>
          </li>
          <li>
            <a>Github</a>
          </li>
          <li>
            <a>Facebook</a>
          </li>
          <li>
            <a>Resume</a>
          </li>
        </ul>
        <div className="right-triangle"></div>
      </div>
    </section>
  )
}

export default ContactSection;