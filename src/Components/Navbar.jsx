import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
function Navbar() {

  return (
    <nav>
      <div className="header-logo">
        <h1>GrowTech</h1>
      </div>

      <div className="header-body">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>

       <div className="sign-in">
        <Link to="/auth">
          <button>Sign Up</button>
        </Link>
      </div>

  <div className="body-theme">
    <button className="light" onclick="light()">☀️</button>
    <button className="dark" onclick="dark">🌙</button>
  </div>
    </nav>
  );
}

export default Navbar;
