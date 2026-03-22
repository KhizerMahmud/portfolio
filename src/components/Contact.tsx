import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { APPLYFIRST_URL, LINKEDIN_URL } from "../constants";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:khizermahmud@gmail.com" data-cursor="disable">
                khizermahmud@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              <strong>Johns Hopkins University</strong>
              <br />
              Baltimore, MD — Master of Science in Computer Science
              <br />
              <br />
              <strong>Virginia Commonwealth University</strong>
              <br />
              Richmond, VA — Bachelor of Science in Biology &amp; Minor in Chemistry
              <br />
              <br />
              <strong>Northern Virginia Community College</strong>
              <br />
              VA — Associate of Science in Biology &amp; Minor in Chemistry
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/khizermahmud"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href={APPLYFIRST_URL}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              ApplyFirst <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Khizer Mahmud</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
