import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faMedium,
  faXTwitter, // Twitter is now "X"
} from "@fortawesome/free-brands-svg-icons";
import "./ContactSection.css";

function Contact() {
  return (
    <section id="contact" className="contact holo-panel">
      <h2 className="neon-text">Let’s Connect</h2>
      <p style={{color: '#00ffff', marginBottom: '30px'}}>Feel free to reach out for collaborations, projects, or just to say hi!</p>

      <form>
        <textarea placeholder="Your message..." required></textarea>
        <button type="submit">Send</button>
      </form>

      {/* Social Media Icons */}
      <div className="social-links">
        <a href="https://linkedin.com/in/shrinavloka" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/lokashrinav" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://medium.com/@lokashrinav" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <a href="https://twitter.com/lokashrinav" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
