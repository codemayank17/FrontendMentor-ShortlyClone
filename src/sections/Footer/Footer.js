import React from "react";
import "./Footer.css";
import logoWhite from "../../images/logo-white.svg";
import facebook from "../../images/icon-facebook.svg";
import pintrest from "../../images/icon-pinterest.svg";
import twitter from "../../images/icon-twitter.svg";
import instagram from "../../images/icon-instagram.svg";
export default function Footer() {
  return (
    <div className="footer">
      <img src={logoWhite} alt="..." />

      <div className="list">
        <h4>Features</h4>
        <ul>
          <li>
            <a href="#!">Link Shortening</a>
          </li>
          <li>
            <a href="#!">Branded Links</a>
          </li>
          <li>
            <a href="#!">Analytics</a>
          </li>
        </ul>
      </div>
      <div className="list">
        <h4>Resources</h4>
        <ul>
          <li>
            <a href="#!">Blog</a>
          </li>
          <li>
            <a href="#!">Developers</a>
          </li>
          <li>
            <a href="#!">Support</a>
          </li>
        </ul>
      </div>
      <div className="list">
        <h4>Company</h4>
        <ul>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">Our Team</a>
          </li>
          <li>
            <a href="#!">Careers</a>
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
        </ul>
      </div>

      <div className="icons">
        <a href="#!">
          <img src={facebook} alt="facebook" className="icon" />
        </a>
        <a href="#!">
          <img src={twitter} alt="twitter" className="icon" />
        </a>
        <a href="#!">
          <img src={pintrest} alt="pintrest" className="icon" />
        </a>
        <a href="#!">
          <img src={instagram} alt="instagram" className="icon" />
        </a>
      </div>
    </div>
  );
}
