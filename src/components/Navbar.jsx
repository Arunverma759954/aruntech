// Navbar.jsx
import React, { useState } from "react";
// import "./Navbar.css"; // Custom CSS file for styling
import "../style/Navbar.css";


const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top shadow">
      <div className="container">
        <a className="navbar-brand logo-text" href="#home">
          Arun <span>Verma</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// Navbar.csss