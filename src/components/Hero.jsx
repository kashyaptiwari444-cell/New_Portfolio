import React from "react";
import Icon from "./Icon";
export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="dot" />
          Full Stack Developer
        </div>
        <h1>
          Building <span>modern web</span>
          <br />
          experiences.
        </h1>
        <p className="hero-text">
          Python • Django • React • Node.js — building responsive, scalable, and
          user-focused web applications.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">
            View Projects <Icon name="arrow" />
          </a>
          <a className="btn ghost" href="#contact">
            Contact Me
          </a>
        </div>
        <div className="quick-links">
          <a
            href="https://github.com/kashyaptiwari444-cell"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kashyap-tiwari-25627137a/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="linkedin" />
            LinkedIn
          </a>
          <span>
            <Icon name="map" />
            Prayagraj, India
          </span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="glow" />
        <div className="profile-ring">
          <div className="profile-photo">
            <img
              src="/profile.jpg"
              alt="Kashyap Tiwari"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            {/* <span className="profile-initials">KT</span> */}
          </div>
        </div>
        <div className="floating-card card-one">
          <b>Full Stack</b>
          <span>Python • Django • React</span>
        </div>
        <div className="floating-card card-two">
          <b>KTWebPoints</b>
          <span>Building modern web apps</span>
        </div>
      </div>
    </section>
  );
}
