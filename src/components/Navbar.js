/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import logo from "../images/react-logo.png";
function Navbar() {
  return (
    <nav>
      <img className="nav-image" src={logo} alt="description of image" />
      <h3 className="font-family container">ReactFacts</h3>
      <h4 className="font-family container">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
