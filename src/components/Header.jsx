import React from "react";
import Icon from "./Icon";
export default function Header() {
  return (
    <header className="navbar">
      <a className="brand" href="#home">
        <span className="brand-mark">KT</span>Kashyap
        <span className="accent">.</span>
      </a>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav-cta" href="#contact">
        Let's Talk <Icon name="arrow" />
      </a>
    </header>
  );
}
