import React, { useRef, useEffect, useState } from "react";
import "../assets/css/Skill.css";
import { useInViewAnimation } from "../context/InViewAnimation";

const Skill = () => {
  const ref = useRef(null);
  const isVisible = useInViewAnimation("SKILLS", ref);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Demo API
    setSkills([
      { name: "React", level: 90 },
      { name: "Django", level: 85 },
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "HTML & CSS", level: 95 },
    ]);
  }, []);

  return (
    <section
      ref={ref}
      id="SKILLS"
      className={`skills container ${isVisible ? "animate" : ""}`}
    >
      <h2>My Skill</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;