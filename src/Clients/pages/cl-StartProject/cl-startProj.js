import React, { useState, useEffect } from "react";
// import "./cl-startProj.css";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { loginUser } from "../../../redux/actions/clientsActions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import SkillSelector from "../../../components/skills-selector/skills-selector";

function CLStartProj() {
  const [countries, setCountry] = useState([]);
  const [state, setState] = useState({
    skills: [],
    deadline: "",
    budget: "",
    desc: "",
  });
  const settingSkills = (skillList) => {
    setState((prevState) => {
      return { ...prevState, skills: skillList };
    });
  };

  const handleChange = (e) => {
    e.persist();
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
    console.log(state);
  };

  // const dispatch = useDispatch();
  return (
    <Container>
      <div className="form-box">
        <SkillSelector settingSkills={settingSkills} />
        <Row>
          <Col>
            <label>Project Deadline</label>
            <input type="date" name="deadline" onChange={handleChange}></input>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Budget</label>
            <input
              type="text"
              placeholder="Enter Budget"
              name="budget"
              onChange={handleChange}
            ></input>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Project Description</label>
            <textarea rows="5" name="desc" onChange={handleChange}>
              Description Here
            </textarea>
          </Col>
        </Row>
        <Row>
          <Col>
            <button className="back">Back</button>
            <button>Next</button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = { loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(CLStartProj);
// export default CLStartProj;
