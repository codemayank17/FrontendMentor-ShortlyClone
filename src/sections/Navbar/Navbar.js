import React, { useState } from "react";
import Logo from "../../images/logo.svg";
import "./Navbar.css";
export default function Navbar() {
  const [collapsed, setCollapsed] = useState("");
  const collapse = () => {
    if (collapsed === "") setCollapsed("open");
    else if (collapsed === "open") setCollapsed("");
    else setCollapsed("");
  };
  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" />
      <button
        className={`hamburger hamburger-${collapsed}`}
        onClick={() => collapse()}
      >
        <i class="fa fa-bars"></i>
      </button>
      <div className={`links ${collapsed}`}>
        <ul>
          <li>
            <a href="#!">Features</a>
          </li>
          <li>
            <a href="#!">Pricing</a>
          </li>
          <li>
            <a href="#!">Resources</a>
          </li>
          <li id="login">
            <a href="#!">Login</a>
          </li>
        </ul>
        <button className="btn-Nav">Sign Up</button>
      </div>
    </nav>
  );
}
