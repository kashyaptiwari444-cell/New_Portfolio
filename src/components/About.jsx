import React from "react";
import SectionHeading from "./SectionHeading";
export default function About() {
  return <section id="about" className="section about"><SectionHeading number="01" title="About Me"/><div className="about-grid"><div><p className="lead">I'm a Full Stack Developer focused on building modern, responsive, and scalable web applications. My work spans frontend interfaces, backend APIs, databases, authentication, and deployment.</p><p>I enjoy solving real-world problems with clean code and practical product design. Alongside my development work, I'm building <strong>KTWebPoints</strong> — a personal web-development initiative focused on creating modern web solutions.</p></div><div className="stats"><div><strong>1+</strong><span>Year Teaching<br/>Experience</span></div><div><strong>4+</strong><span>Featured<br/>Projects</span></div><div><strong>0.90</strong><span>Approx. R²<br/>Model Score</span></div></div></div></section>;
}
