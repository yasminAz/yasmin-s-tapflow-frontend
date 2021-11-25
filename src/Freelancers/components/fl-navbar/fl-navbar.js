import React from "react";
import "./fl-navbar.css";
import {
  Dropdown,
  Row,
  Col,
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./Logotf.png";
import profile from "../../../images/profile-pic.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/actions/userActions/userActions";
import axios from "axios";

function FlNavbar({ children }) {
  const dispatch = useDispatch();
  console.log(window.location.pathname);
  return (
    <div>
      <Navbar>
        <Dropdown className="fl-navbar-dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <div className="fl-navbar-profile">
              <img src={profile} />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item onClick={() => dispatch(logoutUser())}>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {window.location.pathname === "/flUser/main/explore-projects" ? (
          ""
        ) : (
          <Link
            className="fl-navbar-explore-btn"
            to="/flUser/main/explore-projects"
          >
            Explore Projects
          </Link>
        )}
      </Navbar>

      <Navbar>
        <Navbar.Brand>
          <Link style={{ textDecoration: "none" }} to="/flUser/main/dashboard">
            <img src={logo} className="fl-navbar-tf-logo" />
          </Link>
        </Navbar.Brand>
        <div className="fl-navbar-contianer">
          <Link className="fl-navbav-btn" to="/flUser/main/dashboard">
            Dashboard
          </Link>
          <Link className="fl-navbav-btn" to="/flUser/main/fl-profile-page">
            Your Profile
          </Link>
          <Link className="fl-navbav-btn">Agency</Link>
          <Link className="fl-navbav-btn">Chats</Link>
          <Link className="fl-navbav-btn">Payments</Link>
          <Link className="fl-navbav-btn">Settings</Link>
        </div>
      </Navbar>
      <div className="fl-navbar-main-container">{children}</div>
    </div>
  );
}

export default FlNavbar;
