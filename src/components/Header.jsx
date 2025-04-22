
import Krit from "../assets/download/Krit.pdf"

const Header = () => {
  const menuFunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  };

  const handleDownload = () => {
    // เปิดไฟล์ PDF ในแท็บใหม่
    window.open(Krit, "_blank", "noopener,noreferrer");
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
          <button
            onClick={handleDownload}
            className="btn"
            type="button"
          >
            View CV <i className="uil uil-file-download-alt"></i>
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
