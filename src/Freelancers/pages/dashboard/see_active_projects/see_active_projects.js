import React from "react";
import "./see_active_projects.css";
import { Link } from "react-router-dom";

function SeeActiveProjects() {
  return (
    <div className="see-all-active">
      <div className="see-all-active-header">
        <div className="see-all-active-title">Active Projects</div>
        <div className="see-all-active-btn">
          <Link exact to="/flUser/main/active-projects">
            {" "}
            See all projects{" "}
          </Link>
        </div>
      </div>
      <div className="see-all-active-proj-row">
        <div className="see-all-active-proj-box"></div>
        <div className="see-all-active-proj-box"></div>
      </div>
    </div>
  );
}

export default SeeActiveProjects;
