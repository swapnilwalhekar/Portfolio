import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Library management system",
      img: "/projects/lmsLanding.png",
      gLink: "https://github.com/swapnilwalhekar/Library-Management-System",
      lLink: "https://librarymanagementbysw.netlify.app/",
      description:"Created Library MAnagement Systen using React JS and Redux. In this application I have covered maximum concepts."
    },
    {
      title: "Project 2",
      img: "/projects/2.png",
      gLink: "https://github.com/hafizjavaid",
      lLink: "https://me-hafiz.netlify.app/",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/swapnilwalhekar?tab=repositories"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
