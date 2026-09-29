import React from "react";
import Icon from "./Icon";
export default function BrandSection() {
  return (
    <section className="brand-section section">
      <div className="brand-panel">
        <div className="brand-logo">
          KT<span>WP</span>
        </div>
        <div>
          <div className="mini-label">Personal Web Initiative</div>
          <h2>KTWebPoints</h2>
          <p>
            Building modern web applications and digital experiences with
            practical full-stack development.
          </p>
        </div>
        <a className="btn light" href="#contact">
          Let's Build <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}
