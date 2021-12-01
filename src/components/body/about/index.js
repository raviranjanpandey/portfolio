import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <br /> 5+ years experienced & result-oriented <span className="info-name">Senior Software Engineer,</span> skilled in leading the development of multiple commercially successful products from scratch, with active involvement throughout the development life cycle. Proficient at implementing core backend development tasks including 3rd party API integrations, REST API Development, website maintenance, etc. while working with multiple frameworks, software, Operating Systems & Programming languages. Adept at employing the Agile methodology of software development to lead teams & deliver high-quality products within the stipulated deadlines. Possess a passion to learn and work on the latest technologies. Provides leadership, training & feedback to ensure that teams perform to the best of their abilities & deliver consistently.
        </div>
        <div className="about-photo">
          <img
            src="https://bit.ly/3I56kAy"
            className="picture"
            alt="profile"
          />
        </div>
      </div>
      <div className="about-bottom">
        <SocialContact />
      </div>
    </div>
  );
};

export default About;
