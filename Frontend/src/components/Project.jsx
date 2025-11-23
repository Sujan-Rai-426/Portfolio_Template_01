import React, { useRef, useEffect, useState } from "react";
import "../assets/css/Project.css";
import { useInViewAnimation } from "../context/InViewAnimation";

const Project = () => {
  const ref = useRef(null);
  const isVisible = useInViewAnimation("PROJECTS", ref);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      { name: "Portfolio Website", description: "My personal portfolio", link: "#" },
      { name: "E-commerce App", description: "Full-stack e-commerce app", link: "#" },
      { name: "Blog Platform", description: "A platform for blogging", link: "#" },
    ]);
  }, []);

  return (
    <section
      ref={ref}
      id="PROJECTS"
      className={`projects container ${isVisible ? "animate" : ""}`}
    >
      <h2>Project</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn-primary" target="_blank">View</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;