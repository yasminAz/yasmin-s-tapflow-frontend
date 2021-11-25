import React from "react";
import "./header-nav.css";
import { Link } from "react-router-dom";
import tapflow from "../../images/tapflow-logo.svg";
import profile from "../../images/profile-pic.png";
import {
  Dropdown,
  Row,
  Col,
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { BiChevronDown } from "react-icons/bi";

function HeaderNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link style={{ textDecoration: "none" }} to="/">
            <img src={tapflow} className="HeaderNav-logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Link to="/">Home</Link>
            <Link to="/">Explore</Link>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Categories <BiChevronDown />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link to="/clUser/login">Contact Us</Link>
            <div className="profile">
              <img src={profile} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div className="home-header-nav">
    //   <div className="home-nav-box">
    //     <Row>
    //       <Col sm={{ span: 2 }} xl={{ span: 5 }}></Col>
    //     </Row>
    //     <Link style={{ textDecoration: "none" }} to="/">
    //       <img src={tapflow} className="HeaderNav-logo" />
    //     </Link>
    //     <Link style={{ textDecoration: "none" }} to="/">
    //       Home
    //     </Link>
    //     <Link style={{ textDecoration: "none" }} to="/clUser/login">
    //       Explore
    //     </Link>
    //     <Dropdown>
    //       <Dropdown.Toggle variant="success" id="dropdown-basic">
    //         Categories <BiChevronDown />
    //       </Dropdown.Toggle>

    //       <Dropdown.Menu>
    //         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    //         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    //         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    //       </Dropdown.Menu>
    //     </Dropdown>
    // <Link style={{ textDecoration: "none" }} to="/clUser/login">
    //   Contact Us
    // </Link>
    // <div className="profile">
    //   <img src={profile} />
    // </div>
    //   </div>
    // </div>
  );
}

export default HeaderNav;
