import React from "react";
import "./work-card.css";

const WorkCard = ({ item }) => {
  return (
    <div className="work-card">
      <img src={item.companyLogo} className="work-logo" alt="work" />
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
        <div className="work-links">
          {item.url && (
            <a className="work-link" href={item.url}>
              <div className="link-button">
                <i class="fi-rr-globe"></i>Website
              </div>
            </a>
          )}
          </div>
      </div>
    </div>
  );
};

export default WorkCard;
