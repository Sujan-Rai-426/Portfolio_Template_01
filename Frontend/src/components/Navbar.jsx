import React, { useState, useEffect } from "react";
import "../assets/css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("HOME");

  const sections = ["HOME", "ABOUT", "SKILLS", "PROJECTS", "EDUCATION", "CONTACT"];

  // Smooth scroll and set active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar fade-in-down">
      <div className="navbar-container container">
        <div className="navbar-logo">Sujan Rai</div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        <div
          className={`hamburger ${isOpen ? "toggle" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;