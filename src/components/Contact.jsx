import React from "react";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
export default function Contact() {
  return <section id="contact" className="section contact"><SectionHeading number="05" title="Let's Connect"/><div className="contact-grid"><div><h3>Have a project or opportunity?</h3><p>I'm open to discussing full-stack development, web applications, internships, and collaboration opportunities.</p><a className="email-link" href="mailto:kashyaptiwari444@gmail.com"><Icon name="mail"/>kashyaptiwari444@gmail.com</a></div><div className="contact-links"><a href="https://github.com/kashyaptiwari444-cell" target="_blank" rel="noreferrer"><Icon name="github"/>GitHub <Icon name="arrow"/></a><a href="https://www.linkedin.com/in/kashyap-tiwari-25627137a/" target="_blank" rel="noreferrer"><Icon name="linkedin"/>LinkedIn <Icon name="arrow"/></a><a href="https://kashyaptiwariportfolio.vercel.app/" target="_blank" rel="noreferrer"><Icon name="external"/>Existing Portfolio <Icon name="arrow"/></a></div></div></section>;
}
