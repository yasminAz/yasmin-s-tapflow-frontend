import React from "react";
import "./see_suggested_projects.css";
import { Link } from "react-router-dom";

function SeeSuggestedProjects() {
  return (
    <div className="see-all-suggested">
      <div className="see-all-suggested-header">
        <div className="see-all-suggested-title">Suggested Projects</div>
        <div className="see-all-suggested-btn">
          <Link exact to="/flUser/main/explore-projects">
            See all projects
          </Link>
        </div>
      </div>
      <div className="see-all-suggested-proj-row">
        <div className="see-all-suggested-proj-box"></div>
        <div className="see-all-suggested-proj-box"></div>
        <div className="see-all-suggested-proj-box"></div>
      </div>
    </div>
  );
}

export default SeeSuggestedProjects;
