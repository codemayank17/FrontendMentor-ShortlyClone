import React from "react";
import icon1 from "../../images/icon-brand-recognition.svg";
import icon3 from "../../images/icon-fully-customizable.svg";
import icon2 from "../../images/icon-detailed-records.svg";
import Card from "../../components/Card/Card";

import "./Middle.css";
import Shortener from "../../components/Shoterner/Shortener";
export default function Middle() {
  return (
    <div className="middle">
      <Shortener />
      <div className="top-header">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="cards">
        <Card
          cardnum="card1"
          icon={icon1}
          heading={"Detailed Records"}
          para={
            "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          }
        />
        <Card
          cardnum="card2"
          icon={icon2}
          heading={"Brand Recognition"}
          para={
            "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          }
        />
        <Card
          cardnum="card3"
          icon={icon3}
          heading={"Fully Customizable"}
          para={
            "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          }
        />
      </div>
    </div>
  );
}

//     Boost your links today Get Started
