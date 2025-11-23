import React, { useRef } from "react";
import CodeVora from "../assets/img/CodeVora.png";
import "../assets/css/Hero.css";
import { useInViewAnimation } from "../context/InViewAnimation";

const Hero = () => {
  const ref = useRef(null);
  const isVisible = useInViewAnimation("HOME", ref);

  return (
    <section
      ref={ref}
      id="HOME"
      className={`hero container ${isVisible ? "animate" : ""}`}
    >
      <div className="hero-content">
        <h1>Hi, I'm Sujan Rai</h1>
        <p>Full-Stack Developer | React | Django | Python</p>
        <a href="#CONTACT" className="btn-primary">Hire Me</a>
      </div>
      <div className="hero-image">
        <img src={CodeVora} alt="Sujan Rai" />
      </div>
    </section>
  );
};

export default Hero;