import React from "react";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { projects } from "../data";
export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <SectionHeading number="03" title="Selected Projects" />
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <span className="project-index">0{index + 1}</span>
              <span className="project-type">{project.type}</span>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <Icon name="external" />
              </a>
            </div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <ul>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a
              className="text-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              View project <Icon name="arrow" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
