import React from "react";
import Logo from "../ASSETS/NavImg.png";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="Navigation">
      <div className="Logo">
        <img src={Logo} alt="Logo" className="Logo" />
      </div>
      <div className="Search">
        <input placeholder="Search" />
      </div>
    </div>
  );
}

export default Navigation;
