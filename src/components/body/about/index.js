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
            src="https://by3302files.storage.live.com/y4mjGGCy5_t4utzCbxPC6JOwkwAZ2OFc-SrLH3ldkRkpus_Y2ie8dcX8aJzx1qqAnIFrn3y-WaXpsSd_JoOg4_9EZmeBq7cBhAV3u6jSHDTcKIhWNFRqdiAUdGN2LL8Ksx9xQHAmeCfDOqZzvF-16hokj3_SnopT8uVQT9dBS5uG-zFZ20uZv6ot03_BrkibCCn?width=378&height=388&cropmode=none"
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
