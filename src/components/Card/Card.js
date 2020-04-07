import React from "react";
import "./Card.css";
export default function Card({ icon, heading, para, cardnum }) {
  return (
    <div className="card" id={cardnum}>
      <div className="img-container">
        <img src={icon} alt="..." />
      </div>
      <h3>{heading}</h3>
      <p>{para}</p>
    </div>
  );
}
