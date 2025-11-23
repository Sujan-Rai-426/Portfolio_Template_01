import React, { useRef } from "react";
import "../assets/css/About.css";
import { useInViewAnimation } from "../context/InViewAnimation";

const About = () => {
  const ref = useRef(null);
  const isVisible = useInViewAnimation("ABOUT", ref);

  return (
    <section
      ref={ref}
      id="ABOUT"
      className={`about container ${isVisible ? "animate" : ""}`}
    >
      <h2>About Me</h2>
      <p>
        I am a passionate Full-Stack Developer with experience in building web applications using React, Django, and Python.
        I love creating efficient and user-friendly solutions.
      </p>
    </section>
  );
};

export default About;