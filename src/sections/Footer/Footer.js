import React from "react";
import logoWhite from "../../images/logo-white.svg";
import facebook from "../../images/icon-facebook.svg";
import pintrest from "../../images/icon-pinterest.svg";
import twitter from "../../images/icon-twitter.svg";
import instagram from "../../images/icon-instagram.svg";
export default function Footer() {
  return (
    <div className="footer">
      <img src={logoWhite} alt="..." />
      <div>
        <div>
          <h4>Features</h4>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div>
        <img src={facebook} alt="facebook" className="icon" />
        <img src={twitter} alt="twitter" className="icon" />
        <img src={pintrest} alt="pintrest" className="icon" />
        <img src={instagram} alt="instagram" className="icon" />
      </div>
    </div>
  );
}
