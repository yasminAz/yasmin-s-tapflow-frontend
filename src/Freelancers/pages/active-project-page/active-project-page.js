import React from "react";
import "./active-project-page.css";
import { Link, Route } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

function ActiveProjectsPage() {
  return (
    <div className="active-projects-container">
      <div style={{ display: "flex", textDecoration: "none" }}>
        <Link to="/flUser/main/dashboard">
          <HiArrowLeft />
          Dashboard
        </Link>
      </div>

      <span className="active-projects-title">Active Projects</span>
      <div className="active-projects-row">
        <div className="active-projects-box"></div>
        <div className="active-projects-box"></div>
        <div className="active-projects-box"></div>
      </div>
      <div className="active-projects-row">
        <div className="active-projects-box"></div>
        <div className="active-projects-box"></div>
        <div className="active-projects-box"></div>
      </div>

      <div style={{ display: "flex", float: "right", textDecoration: "none" }}>
        <Link to="/flUser/main/pending-projects">
          Pending Projects
          <HiArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default ActiveProjectsPage;
