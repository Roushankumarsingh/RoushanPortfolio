import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Particle from "../Particle";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        () => alert("Message sent successfully!"),
        () => alert("Failed to send message. Please try again.")
      );
    setFormData({ name: "", email: "", message: "" });
  };

  // Styles
  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#0e1628",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "7rem 1rem 2rem 1rem",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
    zIndex: 1,
  };

  const highlightStyle = {
    color: "#60a5fa",
  };

  const paragraphStyle = {
    color: "#cbd5e1",
    textAlign: "center",
    marginBottom: "40px",
    maxWidth: "700px",
    zIndex: 1,
  };

  const cardContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    width: "100%",
    maxWidth: "1200px",
    justifyContent: "center",
    zIndex: 1,
  };

  const baseCardStyle = {
    flex: "1 1 400px",
    padding: "24px",
    borderRadius: "16px",
    backdropFilter: "blur(8px)",
    boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
  };

  const infoCardStyle = {
    ...baseCardStyle,
    backgroundColor: "rgba(255, 255, 255, 0)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
  };

  const formCardStyle = {
    ...baseCardStyle,
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
  };

  const itemRow = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "20px",
  };

  const iconStyle = {
    color: "#60a5fa",
    fontSize: "24px",
  };

  const labelStyle = {
    fontWeight: "600",
    marginBottom: "4px",
  };

  const contactValueStyle = {
    color: "#cbd5e1",
  };

  const inputStyle = {
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "12px",
    width: "100%",
    marginBottom: "20px",
    outline: "none",
    fontSize: "16px",
  };

  const labelAboveInput = {
    fontWeight: "500",
    marginBottom: "6px",
    display: "block",
    color: "#93c5fd",
  };

  const buttonStyle = {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    fontWeight: "600",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "8px",
  };

  const socialStyle = {
    display: "flex",
    gap: "16px",
    marginTop: "12px",
  };

  const iconHoverStyle = {
    fontSize: "24px",
    color: "#cbd5e1",
    transition: "color 0.2s ease-in-out, transform 0.2s ease-in-out",
    cursor: "pointer",
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = "#60a5fa";
    e.target.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = "#cbd5e1";
    e.target.style.transform = "scale(1)";
  };

  return (
    <div style={containerStyle}>
      <Particle />

      <h2 style={headingStyle}>
        Let's Get In <span style={highlightStyle}>Touch</span>
      </h2>
      <p style={paragraphStyle}>
        Have any questions or want to discuss a potential collaboration? Feel free to reach out.
      </p>

      <div style={cardContainer}>
        {/* Info Card */}
        <div style={infoCardStyle}>
          <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "24px" }}>
            Contact Information
          </h3>

          <div style={itemRow}>
            <FaEnvelope style={iconStyle} />
            <div>
              <div style={labelStyle}>Email</div>
              <div style={contactValueStyle}>roushankumarsingh452@gmail.com</div>
            </div>
          </div>

          <div style={itemRow}>
            <FaPhoneAlt style={iconStyle} />
            <div>
              <div style={labelStyle}>Phone</div>
              <div style={contactValueStyle}>+91 7542906663</div>
            </div>
          </div>

          <div style={itemRow}>
            <FaMapMarkerAlt style={iconStyle} />
            <div>
              <div style={labelStyle}>Location</div>
              <div style={contactValueStyle}>
                <a
                  href="https://www.google.com/maps?q=Sasaram,+Bihar,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#cbd5e1", textDecoration: "underline" }}
                >
                  Sasaram, Bihar, India
                </a>
              </div>
            </div>
          </div>

          <div style={labelStyle}>Connect With Me</div>
          <div style={socialStyle}>
            <a href="https://github.com/Roushankumarsingh" target="_blank" rel="noopener noreferrer">
              <FaGithub
                style={iconHoverStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </a>
            <a href="https://www.linkedin.com/in/roushan-kumar-singh-74b774252/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                style={iconHoverStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </a>
            <a href="https://www.instagram.com/_roushan__rajput_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram
                style={iconHoverStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </a>
          </div>
        </div>

        {/* Form Card */}
        <div style={formCardStyle}>
          <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "24px" }}>
            Send me a message
          </h3>
          <form onSubmit={handleSubmit}>
            <label style={labelAboveInput} htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <label style={labelAboveInput} htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <label style={labelAboveInput} htmlFor="message">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message here..."
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ ...inputStyle, resize: "none" }}
            ></textarea>

            <button type="submit" style={buttonStyle}>
              🚀 Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;