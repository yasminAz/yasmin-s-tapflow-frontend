import React from "react";
import "./fl-explore-box.css";

function FlExploreBox() {
  return (
    <div className="explore-projects-box">
      <div className="explore-projects-box-image"></div>
      <div className="explore-projects-box-title">VR Tech</div>
      <div className="explore-projects-box-ago">2 weeks</div>
      <div className="explore-projects-box-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis integer
        egestas vivamus amet duis diam elit tempus a.
      </div>
      <div className="explore-projects-box-cat-row">
        <div className="explore-projects-box-cat">Development</div>
        <div className="explore-projects-box-cat">Social Media</div>
        <div className="explore-projects-box-cat">Writing</div>
      </div>
      <div className="explore-projects-box-btn">Apply now</div>
    </div>
  );
}

export default FlExploreBox;
