import React from "react";

const ProjectsBox = () => {
  return (
    <section className="section" id="project">
      <div className="top-header">
        <h1>Project</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Completed</h3>
          <label>It's Over 9000! Finished project</label>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Clients</h3>
          <label>9000+ Happy Clients</label>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Exprtience</h3>
          <label>1 Week in the field</label>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBox;
