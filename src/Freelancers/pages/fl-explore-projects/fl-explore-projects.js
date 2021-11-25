import React from "react";
import "./fl-explore-projects.css";
import FlExploreFilter from "./fl-explore-filter/fl-explore-filter";
import FlExploreBox from "./fl-explore-box/fl-explore-box";

export const ExploreProject = () => {
  return (
    <div className="explore-projects-container">
      <div className="explore-main-title">Explore Projects</div>
      <FlExploreFilter />
      <div className="explore-projects-row">
        <FlExploreBox />
        <FlExploreBox />
      </div>
      <div className="explore-projects-row">
        <FlExploreBox />
        <FlExploreBox />
      </div>
      <div className="explore-projects-row">
        <FlExploreBox />
        <FlExploreBox />
      </div>
    </div>
  );
};
