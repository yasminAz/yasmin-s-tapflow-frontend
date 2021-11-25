import React from "react";
import { connect } from "react-redux";
import HeaderNav from "../components/header-nav/header-nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./landing-page.css";
import linkedin from "./images/linkedIn.svg";
import insta from "./images/insta.svg";
import { Link } from "react-router-dom";

export const LandingPage = (props) => {
  return (
    <Container fluid className="Landing-Page">
      <Row>
        <Col xs={{ span: 12 }}>
          <Link to="/ClUser/login">Client Login</Link>
          <Link to="/fl-landing-page">Freelancer Landing page</Link>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 12 }} xl={{ span: 5 }}>
          <h1 className="title">Build a team and take on projects together</h1>
          <p className="subtitle">
            Increase your exposure dramatically when signing on as a freelancer
            with Tapflow. Connect with other freelancers and form teams to take
            on projects together!
          </p>
          <div className="SocialMediaCont">
            <img src={insta} className="img-fluid" alt="Instagram"></img>
            <img src={linkedin} className="img-fluid" alt="LinkedIn"></img>
          </div>
        </Col>
        <Col sm={{ span: 12 }} xl={{ span: 5, offset: 1 }}>
          <div className="create-an-acc">
            <h2 className="form-title">Create an account</h2>
            <form>
              <Row>
                <Col xs={{ span: 12 }} md={{ span: 6 }}>
                  <label>First name</label>
                  <input
                    type="text"
                    name="firstName"
                    // onChange={handleChange}
                  />
                </Col>
                <Col xs={{ span: 12 }} md={{ span: 6 }}>
                  <label>Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    // onChange={handleChange}
                  />
                </Col>
                <Col xs={{ span: 12 }} md={{ span: 6 }}>
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    // onChange={handleChange}
                  />
                </Col>
                <Col xs={{ span: 12 }} md={{ span: 6 }}>
                  <label>Password</label>
                  <input
                    type="password"
                    name="Pass"
                    // onChange={handleChange}
                  />
                </Col>
                <Col xs={{ span: 6 }}>
                  <p className="form-note">*I already have an account</p>
                </Col>
                <Col xs={{ span: 6 }}>
                  <button className="form-submit">Submit</button>
                </Col>
              </Row>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
