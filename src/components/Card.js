import React from "react";

export default function Card({ icon, heading, para }) {
  return (
    <div className="card">
      <img src={icon} alt="..." />
      <h1>{heading}</h1>
      <p>{para}</p>
    </div>
  );
}
