
import Krit from "../assets/download/Krit.pdf"

const AboutBox = () => {
  const handleViewCV = () => {
    window.open(Krit, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About me</h1>
      </div>
      <div className="row">
        {/* About me */}
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              Introducing Krit, an aspiring Full‑Stack Web Developer proficient in HTML, CSS, JavaScript, React, Node.js, Go, and PHP. Passionate about crafting responsive user interfaces and building robust backend services, Krit has hands‑on experience with RESTful APIs, database design (MySQL, MongoDB), and deploying applications to the cloud. Eager to take on real‑world projects, he is actively seeking internships or part‑time remote roles to further hone his skills, collaborate with teams, and contribute to impactful web applications from day one.
            </p>
            <div className="about-btn">
              <button
                onClick={handleViewCV}
                className="btn"
                type="button"
              >
                View CV <i className="uil uil-file-download-alt"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
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
              <span>Go</span>
              <span>PHP</span>
              <span>MongoDB</span>
              <span>Node.js</span>
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
