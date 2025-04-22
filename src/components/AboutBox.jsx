import React from "react";

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About me</h1>
      </div>
      <div className="row">
        {/** About me */}
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              Introducing Krit, a versatile DevOps professional with a mastery
              of multiple programming languages. With a strong focus on
              automation, cloud infrastructure, and continuous
              integration/continuous deployment (CI/CD), Krit excels at bridging
              the gap between development and operations. Whether it's
              scripting, containerization, or optimizing workflows, Krit's
              diverse skill set enables him to tackle any challenge in the tech
              landscape with confidence and creativity.
            </p>
            <div className="about-btn">
              <div className="nav-button">
                <a href={import.meta.env.BASE_URL + "CV_Krit1.pdf"} target="blank" download className="btn">
                  Download CV
                </a>
              </div>
              <div className="nav-menu-btn"></div>
            </div>
          </div>
        </div>
        {/** Skills */}
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Boostrap</span>
              <span>Tailwind</span>
              <span>DaisyUI</span>
              <span>Figma</span>
              <span>React</span>
              <span>Vue</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              <span>GO</span>
              <span>PHP</span>
              <span>MongoDB</span>
              <span>Nodejs</span>
              <span>TypeScript</span>
              <span>Python</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>MySQL</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
