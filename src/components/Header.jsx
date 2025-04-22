import React from "react";

const Header = () => {
  const menuFunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className == "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  };

  const handleDownload = () => {
    window.open('/CV_Krit1.pdf', '_blank');
  };

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">KRIT</p>
        <span>.</span>
      </div>

      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className="nav-link active-link">
              Home
            </a>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav_list">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-button">
          <button onClick={handleDownload} className="btn" style={{ textDecoration: 'none' }}>
            Download CV<i className="uil uil-file-download-alt"></i>
          </button>
        </div>
      </div>

      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={menuFunction}></i>
      </div>
    </nav>
  );
};

export default Header;
