import React from "react";
import "./Card.css";
export default function Card({ icon, heading, para }) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={icon} alt="..." />
      </div>
      <h3>{heading}</h3>
      <p>{para}</p>
    </div>
  );
}
