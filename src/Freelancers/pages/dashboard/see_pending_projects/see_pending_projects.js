import React from "react";
import "./see_pending_projects.css";
import { Link } from "react-router-dom";

function SeePendingProjects() {
  return (
    <div className="see-all-pending">
      <div className="see-all-pending-header">
        <div className="see-all-pending-title">Pending Projects</div>
        <div className="see-all-pending-btn">
          <Link exact to="/flUser/main/pending-projects">
            See all projects
          </Link>
        </div>
      </div>
      <div className="see-all-pending-proj-row">
        <div className="see-all-pending-proj-box"></div>
        <div className="see-all-pending-proj-box"></div>
      </div>
    </div>
  );
}

export default SeePendingProjects;
