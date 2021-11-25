import React, { useState, useEffect } from "react";
import "./fl-profile-page.css";
import { Container, Row, Col } from "react-bootstrap";
import { GrEdit } from "react-icons/gr";
function FlProfilePage() {
  const [oneCat, setOneCat] = useState({});
  const [subSkills, setSubSkills] = useState([]);

  const categoryList = {
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
  return (
    <Container>
      <Row md={5} className="profile-pg-gen-info">
        <Col md={2}>
          <div className="profile-pg-image"></div>
        </Col>
        <Col md={2}>
          <div className="profile-pg-gen-info-title">Full Name</div>
          <div className="profile-pg-gen-info-main">John Doe</div>
        </Col>
        <Col md={3}>
          <div className="profile-pg-gen-info-title">Email</div>
          <div className="profile-pg-gen-info-main">johndoe@email.com</div>
        </Col>
        <Col md={2}>
          <div className="profile-pg-gen-info-title">Rate</div>
          <div className="profile-pg-gen-info-main">$85/hr</div>
        </Col>
        <GrEdit className="profile-pg-edit-icon" />
      </Row>
      <div className="profile-pg-rest-section">
        <div className="profile-pg-rest-section-left">
          <div className="profile-pg-skills-section">
            <div className="profile-pg-main-skills-row">
              {categoryList.skills.map((cat) => {
                return (
                  <div
                    className="profile-pg-main-skills-btn"
                    onClick={() => {
                      setOneCat(cat);
                      setSubSkills(cat.subSkills);
                    }}
                  >
                    {cat.name}
                  </div>
                );
              })}
            </div>
            <div className="profile-pg-sub-skills-row">
              {subSkills.length === 0
                ? ""
                : subSkills.map((i) => {
                    return (
                      <div id={i.id} className="profile-pg-main-skills-btn">
                        {i.name}
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
        <div className="profile-pg-rest-section-right"></div>
      </div>
    </Container>
  );
}

export default FlProfilePage;
