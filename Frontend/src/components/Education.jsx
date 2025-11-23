import React, { useRef, useEffect, useState } from "react";
import "../assets/css/Education.css";
import { useInViewAnimation } from "../context/InViewAnimation";

const Education = () => {
  const ref = useRef(null);
  const isVisible = useInViewAnimation("EDUCATION", ref);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    setEducation([
      { degree: "B.Tech in Computer Engineering", institution: "Madhan Bhandari College", year: "2016 - 2020" },
      { degree: "High School", institution: "Shree Public School", year: "2014 - 2016" },
    ]);
  }, []);

  return (
    <section
      ref={ref}
      id="EDUCATION"
      className={`education container ${isVisible ? "animate" : ""}`}
    >
      <h2>Education</h2>
      <div className="education-container">
        {education.map((edu, index) => (
          <div className="edu-card" key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <span>{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;