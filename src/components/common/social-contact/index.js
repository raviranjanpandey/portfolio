import React from "react";
import { SocialData } from "../../data/social";
import "./social-contact.css";

const SocialContact = () => {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link} target = "_blank">
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon" alt="social" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialContact;
