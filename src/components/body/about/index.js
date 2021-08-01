import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there, I am
          <br /> <span className="info-name">Senior Software Engineer.</span>
          <br /> I work to develop business solutions.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png").default}
            className="picture"
            alt="coding"
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
