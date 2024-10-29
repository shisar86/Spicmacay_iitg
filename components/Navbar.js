import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/main-logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <img className="navbar-logo" src={logo} />
        <div className="nav-links">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About Us
          </Link>
          <Link className="nav-link" to="/activities">
            Activities
          </Link>
          <Link className="nav-link" to="/events">
            Events
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
