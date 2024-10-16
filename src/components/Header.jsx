import React from "react";
import CV_Krit from "../assets/download/CV_Krit.pdf";
const Header = () => {
  const menuFunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className == "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  };

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">KRIT</p>
        <span>.</span>
      </div>

      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list"></ul>

        <li className="nav_list">
          <a href="#home" className="nav-link active-link">
            Home
          </a>
        </li>
        <li className="nav_list">
          <a href="#about" className="nav-link ">
            about
          </a>
        </li>
        <li className="nav_list">
          <a href="#project" className="nav-link ">
            project
          </a>
        </li>
        <li className="nav_list">
          <a href="#contact" className="nav-link ">
            contact
          </a>
        </li>
      </div>
      <div className="nav-button">
        <a href={CV_Krit} target="blank">
          <button className="btn">
            Download CV<i className="uil uil-file-download-alt"></i>
          </button>
        </a>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={menuFunction}></i>
      </div>
    </nav>
  );
};

export default Header;
