import React from "react";
import Logo from "../ASSETS/NavImg.png";
import "./Home.css";
function Home() {
  return (
    <div className="Home">
      <img src={Logo} alt="content clubbing_" className="LandingImage" />
      <h2>"empowering developers, one article at a time."</h2>
    </div>
  );
}

export default Home;
