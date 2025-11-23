import React, { useState, useEffect } from "react";
import { InViewAnimationProvider } from "../context/InViewAnimation";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Project from "../components/Project";
import Skill from "../components/Skill";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import "../assets/css/Home.css";

function Home() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <InViewAnimationProvider>
      <div>
        <Navbar />

        <button
          className="body-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <main>
            <Hero />
            <About />
            <Education />
            <Project />
            <Skill />
            <Contact />
        </main>
        <Footer />
      </div>
    </InViewAnimationProvider>
  );
}

export default Home;
