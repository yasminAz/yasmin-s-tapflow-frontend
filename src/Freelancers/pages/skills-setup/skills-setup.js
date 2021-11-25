import React, { useState } from "react";
import { connect } from "react-redux";
import "./skills-setup.css";

export const SkillSetup = (props) => {
  const [category, setCategory] = useState("development");
  const [subCategory, setSubCategory] = useState("");

  const categoryList = ["development", "socialmedia", "writing"];
  const subCategoryList = {
    development: [1, 2, 3, 4],
    socialmedia: [5, 6, 7, 8],
    writing: [9, 10, 11, 12],
  };

  return (
    <div>
      <div className="skill-setup-container">
        <div className="skill-catergory-row">
          {categoryList.map((i) => {
            return (
              <div
                id={i}
                className={
                  i === category
                    ? "skill-category-card-chosen"
                    : "skill-category-card"
                }
                onClick={(e) => setCategory(e.target.id)}
              >
                <span>{i}</span>
              </div>
            );
          })}
        </div>
        <div className="skill-sub-catergory-row">
          {subCategoryList[category].map((i) => {
            return (
              <div
                id={i}
                className="skill-category-card"
                // {(e) =>
                //   e.target.id === category
                //     ? "skill-category-card"
                //     : "skill-category-card-chosen"
                // }
                onClick={(e) => console.log(e.target.id)}
              >
                <span>{i}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SkillSetup);
