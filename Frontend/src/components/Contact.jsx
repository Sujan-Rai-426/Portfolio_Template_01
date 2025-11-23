import React, { useRef, useState } from "react";
import "../assets/css/Contact.css";
import { useInViewAnimation } from "../context/InViewAnimation";

const Contact = () => {
  const ref = useRef(null);
  const isVisible = useInViewAnimation("CONTACT", ref);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! (Demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      ref={ref}
      id="CONTACT"
      className={`contact container ${isVisible ? "animate" : ""}`}
    >
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;