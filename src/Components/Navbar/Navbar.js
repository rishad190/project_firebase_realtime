import React from "react";
import { Link } from "react-router-dom";
import AnimationText from "../AnimationText/AnimationText";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Power House
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/info" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/chart" className="nav-link">
                  Chart
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <AnimationText></AnimationText>
    </div>
  );
};

export default Navbar;
