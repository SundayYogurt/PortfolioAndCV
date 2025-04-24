

const footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <h1>KRIT</h1>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-social-icons">
        <div className="icon">
          <i className="uil uil-instagram-alt"></i>
        </div>
        <div className="icon">
          <i className="uil uil-facebook-f"></i>
        </div>
        <div className="icon">
          <i className="uil uil-github"></i>
        </div>
      </div>
      <div className="buttom-footer">
        <p>
          Copyright &copy;{" "}
          <a href="#home" style={{ textDecoration: "none" }}>
            Krit
          </a>
          {""} - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default footer;
