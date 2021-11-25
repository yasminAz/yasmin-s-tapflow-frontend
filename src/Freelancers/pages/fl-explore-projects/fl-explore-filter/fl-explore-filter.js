import React from "react";
import "./fl-explore-filter.css";
import { BsFillFilterSquareFill } from "react-icons/bs";

function FlExploreFilter() {
  return (
    <div className="explore-filter-navbar">
      <div className="filter-category-buttons">Development</div>
      <div className="filter-category-buttons">Marketing</div>
      <div className="filter-category-buttons">Writing</div>
      <div className="filter-category-buttons">Branding</div>
      <div className="filter-category-buttons">Design</div>
      {/* <div className="filter-category-buttons">Photography</div>
       */}
      <BsFillFilterSquareFill className="navbar-filter-icon" />
    </div>
  );
}

export default FlExploreFilter;
