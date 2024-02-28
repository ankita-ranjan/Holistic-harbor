import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 88, 121, 1) 53%, rgba(0, 212, 255, 1) 100%)",
      }}
    >
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="contact">Contact Us</h3>
          <form>
            <label htmlFor="name" className="name-label">
              Enter your name:
            </label>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
              />
            </div>

            <label htmlFor="email" className="email-label">
              Enter your email:
            </label>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
              />
            </div>

            <label htmlFor="phone" className="phone-label">
              Enter your phone number:
            </label>
            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your phone number"
              />
              <div />
              <label htmlFor="query" className="query-label">
                Enter your query:
              </label>
              <div className="form-group">
                <textarea id="query" name="query" placeholder="Your query" />
              </div>
              <button type="submit" className="submit-button">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="footer-section">
          <h3>Get In Touch </h3>
          <ul>
            <li>
              <a
                href="https://jobs360degree.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jobs 360 Degree
              </a>
            </li>
            <li>
              <a
                href="https://sarvatr.co.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sarvatr
              </a>
            </li>
            <li>
              <a
                href="https://swadeshibazar.co.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Swadeshi Bazar
              </a>
            </li>
            <li>
              <a
                href="https://vi.rase.co.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shiksha Mahakumbh
              </a>
            </li>
            <li>
              <a
                href="https://www.dhe.org.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Department of Holistic Education
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/company/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/people/Department-of-Holistic-Education/100090170940886/?mibextid=ZbWKwL/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2FDHEBharat1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.kooapp.com/profile/DHEBharat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kooapp
              </a>
            </li>
            <li>
              <span role="img" aria-label="mail">
                📧
              </span>{" "}
              <a href="mailto:holisticharbor.dhe@gmail.com">
                holisticharbor.dhe@gmail.com
              </a>
            </li>
          </ul>
          <div className="map-container">
            <h2 className="font-semibold">Location</h2>
            <div className="iframe-container">
              <iframe
                title="Department of Holistic Education"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.664555194807!2d76.70609041513317!3d30.699823379678664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef39a32ed3c1%3A0x9ff15a51ad5117e9!2sDepartment%20of%20Holistic%20Education!5e0!3m2!1sen!2sin!4v1665005047090!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">&copy; Department of Holistic Education 2024</p>
      </div>
    </footer>
  );
}

export default Footer;

