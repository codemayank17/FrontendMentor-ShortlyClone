import React from "react";
import illustration from "../../images/illustration-working.svg";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn-header">Get Started</button>
      </div>

      <div>
        <img src={illustration} alt="..." />
      </div>
    </div>
  );
}
//   Shorten It! Advanced Statistics Track how your links are performing across the web with our advanced statistics dashboard. Brand Recognition Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. Detailed Records Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. Fully Customizable Improve brand awareness and content discoverability through customizable links, supercharging audience engagement. Boost your links today Get Started Features Link Shortening Branded Links Analytics Resources Blog Developers Support Company About Our Team Careers Contact
