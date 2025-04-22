import React from "react";
import profile from "../assets/images/profile.jpg";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>KRITSANA PIWGRAM</span>
        </div>
        <div className="featured-name">
          I'm <span className="typedText"></span>
        </div>

        <div className="featured-text-info">
          <p>
            Hello! I am a passionate Full Stack Web Developer with proficiency
            in multiple programming languages, including C++, PHP,
            HTML, CSS, JavaScript, React. I also have experience in
            designing databases and creating diagrams to assist in planning
          </p>
        </div>
        <div className="featured-text-btn">
          <a href={import.meta.env.BASE_URL + "CV_Krit1.pdf"} target="blank" download>
            <button className="btn">
              Download CV<i className="uil uil-file-download-alt"></i>
            </button>
          </a>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instragram.com/se_npru">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.instragram.com/se_npru">
              <i className="uil uil-facebook-f"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.instragram.com/se_npru">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={profile} alt="profile" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
