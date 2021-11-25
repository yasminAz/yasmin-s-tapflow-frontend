import React from "react";
import "./header-nav.css";
import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    <div className="home-header-nav">
      <div className="home-nav-box">
        <Link style={{ textDecoration: "none" }} to="/home">
          Home
        </Link>
        <Link style={{ textDecoration: "none" }} to="/fl-landing-page">
          Freelancers
        </Link>
        <Link style={{ textDecoration: "none" }} to="/clUser/login">
          Clients
        </Link>
      </div>
    </div>
  );
}

export default HeaderNav;
