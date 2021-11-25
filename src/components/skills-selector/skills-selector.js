import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

export const SkillSelector = (props) => {
  const [chosenCategories, setChosenCategory] = useState([]);
  const [chosenSubCategories, setChosenSubCategory] = useState([]);
  const [allCategories, setAllCategory] = useState([]);
  const [skills, setSkills] = useState([]);
  const [oneCat, setOneCat] = useState({});

  const categoryList1 = {
    skills: [
      {
        id: "1",
        name: "development",
        image: "img.png",
        subSkills: [
          {
            id: "2",
            skill_id: "1",
            name: "dev 1",
            image: "img.png",
          },
          {
            id: "3",
            skill_id: "1",
            name: "dev 2",
            image: "img.png",
          },
          {
            id: "4",
            skill_id: "1",
            name: "dev 3",
            image: "img.png",
          },
        ],
      },
      {
        id: "2",
        name: "socialmedia",
        image: "img2.png",
        subSkills: [
          {
            id: "5",
            skill_id: "2",
            name: "social 1",
            image: "img.png",
          },
          {
            id: "6",
            skill_id: "2",
            name: "social 2",
            image: "img.png",
          },
          {
            id: "7",
            skill_id: "2",
            name: "social 3",
            image: "img.png",
          },
        ],
      },
      {
        id: "3",
        name: "writing",
        image: "img2.png",
        subSkills: [
          {
            id: "8",
            skill_id: "3",
            name: "writing 1",
            image: "img.png",
          },
          {
            id: "9",
            skill_id: "3",
            name: "writing 2",
            image: "img.png",
          },
          {
            id: "10",
            skill_id: "3",
            name: "writing 3",
            image: "img.png",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    passingSkillsToParent(skills);
  }, [skills]);

  const passingSkillsToParent = (allSkills) => {
    props.settingSkills(allSkills);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    setAllCategory(categoryList1["skills"]);
  };

  //Removing And Adding Catergory Functions
  const addCategory = (c) => {
    setOneCat(c);
    // setAllSubCategory(c["subSkills"]);
    if (!chosenCategories.includes(c)) {
      setChosenCategory((prev) => [...prev, c]);
    } else if (chosenCategories.includes(c)) {
      const catIndex = chosenCategories.indexOf(c);
      setChosenCategory((prevActions) =>
        prevActions.filter((value, i) => i !== catIndex)
      );
      setChosenCategory((prev) => [...prev, c]);
    }
  };

  //Adding and Removing Sub Category Functions
  const addSubCategory = (sc) => {
    setChosenSubCategory((prev) => [...prev, sc]);

    const skill_id = sc.skill_id;
    const subSkillId = sc.id;

    if (skills.length === 0) {
      setSkills([{ catId: skill_id, subCat: [subSkillId] }]);
    } else if (skills.length > 0) {
      if (skills.some((e) => e.catId === skill_id && e.subCat.length === 0)) {
        setSkills((prev) =>
          prev.filter((i) => {
            if (i.catId === skill_id) {
              return { ...i, subCat: [...[i.subCat], subSkillId] };
            }
          })
        );
      } else if (
        skills.some((e) => e.catId === skill_id && e.subCat.length > 0)
      ) {
        let catToUpdate = skills.filter((i) => i.catId === skill_id)[0];

        catToUpdate.subCat.push(subSkillId);
      } else if (skills.some((e) => e.catId !== skill_id)) {
        setSkills((prev) => {
          return [...prev, { catId: skill_id, subCat: [subSkillId] }];
        });
      }
    }
  };

  const removeSubCategory = (sc) => {
    const subcatIndex = chosenSubCategories.indexOf(sc);
    setChosenSubCategory((prevActions) =>
      prevActions.filter((value, i) => i !== subcatIndex)
    );

    const skill_id = sc.skill_id;
    const subSkillId = sc.id;
    let catToUpdate = skills.filter((i) => i.catId === skill_id)[0];

    if (catToUpdate.subCat.length > 1) {
      const catIndex = catToUpdate.subCat.indexOf(subSkillId);
      if (catIndex > -1) {
        catToUpdate.subCat.splice(catIndex, 1);
      } else {
        catToUpdate.subCat.splice(catIndex, catIndex);
      }
    } else if (catToUpdate.subCat.length === 1) {
      const chosenCat = chosenCategories.filter((i) => i.id === sc.skill_id)[0];
      const catIndex = chosenCategories.indexOf(chosenCat);
      if (catIndex > -1) {
        chosenCategories.splice(catIndex, 1);
      }
      const chosenSkill = skills.filter((i) => i.catId === sc.skill_id)[0];
      const skillIndex = skills.indexOf(chosenSkill);
      if (skillIndex > -1) {
        skills.splice(skillIndex, 1);
      }
    }
  };

  const checkSubCategory = (subcat) => {
    if (chosenSubCategories.indexOf(subcat) > -1) {
      removeSubCategory(subcat);
    } else {
      addSubCategory(subcat);
    }
  };

  // console.log(chosenCategories);
  // console.log(chosenSubCategories);
  // console.log(skills);

  return (
    <div>
      <div className="skill-catergory-row">
        {allCategories.map((i) => {
          return (
            <div
              id={i.id}
              className={
                chosenCategories.some((s) => s.id === i.id)
                  ? "skill-category-card-chosen"
                  : "skill-category-card"
              }
              onClick={(e) => {
                e.persist();
                addCategory(i);
              }}
            >
              <span>{i.name}</span>
            </div>
          );
        })}
      </div>

      <div className="skill-sub-catergory-row">
        {chosenCategories[chosenCategories.length - 1] === undefined
          ? ""
          : oneCat.subSkills.map((i) => {
              return (
                <div
                  id={i.id}
                  className={
                    chosenSubCategories.indexOf(i) > -1
                      ? "skill-category-card-chosen"
                      : "skill-category-card"
                  }
                  onClick={(e) => {
                    checkSubCategory(i);
                  }}
                >
                  <span>{i.name}</span>
                </div>
              );
            })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SkillSelector);
