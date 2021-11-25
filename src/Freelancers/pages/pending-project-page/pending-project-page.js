import React from "react";
import "./pending-project-page.css";
import { Link, Route } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

function PendingProjectsPage() {
  return (
    <div className="pending-projects-container">
      <div style={{ display: "flex", textDecoration: "none" }}>
        <Link to="/flUser/main/dashboard">
          <HiArrowLeft />
          Dashboard
        </Link>
      </div>

      <span className="pending-projects-title">Pending Projects</span>
      <div className="pending-projects-row">
        <div className="pending-projects-box"></div>
        <div className="pending-projects-box"></div>
        <div className="pending-projects-box"></div>
      </div>
      <div className="pending-projects-row">
        <div className="pending-projects-box"></div>
        <div className="pending-projects-box"></div>
        <div className="pending-projects-box"></div>
      </div>

      <div style={{ display: "flex", float: "right", textDecoration: "none" }}>
        <Link to="/flUser/main/active-projects">
          Active Projects
          <HiArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default PendingProjectsPage;
