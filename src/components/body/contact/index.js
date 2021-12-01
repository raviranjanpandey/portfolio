import React from "react";
import Seperator from "../../common/seperator";
import "./contact.css";
import SocialContact from "../../common/social-contact";

const Contact = () => {
  return (
    <div className="contact">
      <Seperator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Contact me on linkedin</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../assets/raviranjan.pdf").default}>
            <i class="fi-rr-cloud-download download-icon"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
