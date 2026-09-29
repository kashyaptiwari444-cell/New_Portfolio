import React from "react";
export default function SectionHeading({ number, title }) {
  return (
    <div className="section-head">
      <span>{number}</span>
      <h2>{title}</h2>
    </div>
  );
}
