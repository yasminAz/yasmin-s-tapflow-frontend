import React from "react";
import FLLogin from "../fl-login/fl-login";
import FlSignup from "../fl-signup/fl-signup";
import { useState } from "react";
import HeaderNav from "../../../components/header-nav/header-nav";
import { Container, Row, Col } from "react-bootstrap";
import { BiCaretRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Boys from "./images/Boys.svg";
import X from "./images/X.svg";
import "./fl-landing-page.css";
import { getUserData } from "../../../redux/actions/userActions/userActions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Modal, Button, Tabs, Tab, CloseButton } from "react-bootstrap";
import { FiArrowRight, FiX } from "react-icons/fi";

function FlLandingPage() {
  // Configuration
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="landing-container">
      <HeaderNav />
      <Container>
        <Row>
          <Col sm={{ span: 12 }} lg={{ span: 8, offset: 2 }}>
            <div className="landing-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="Buttons-Help">
              <button className="Orange-Button" onClick={handleShow}>
                Join a Team
              </button>
              <Link to="/">
                Watch Demo <BiCaretRight />
              </Link>
            </div>
          </Col>
          <Col sm={{ span: 12 }} lg={{ span: 8, offset: 2 }}>
            <div className="landing-image">
              <img src={Boys} />
            </div>
          </Col>
        </Row>
        {/* <FLLogin />
        <FlSignup /> */}
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          centered
          dialogClassName="modal-freelancer"
        >
          {/* <Modal.Header closeButton>
            <Modal.Title>Freelancers Login</Modal.Title>
          </Modal.Header> */}
          <button
            type="button"
            className="modal-close"
            aria-hidden="true"
            onClick={handleClose}
          >
            <img src={X} />
          </button>

          <Modal.Body>
            <Tabs
              defaultActiveKey="login"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              {/* Sign Up */}
              <Tab eventKey="signup" title="Signup">
                <FlSignup />
              </Tab>
              {/* Login */}
              <Tab eventKey="login" title="Login">
                <FLLogin />
              </Tab>
              {/* Login */}
            </Tabs>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default FlLandingPage;

