import React from "react";
import SectionHeading from "./SectionHeading";
import { skills } from "../data";
export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading number="02" title="Technical Skills" />
      <div className="skills-grid">
        {Object.entries(skills).map(([category, list]) => (
          <article className="skill-card" key={category}>
            <div className="skill-number">
              {category.slice(0, 2).toUpperCase()}
            </div>
            <h3>{category}</h3>
            <div className="chips">
              {list.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
