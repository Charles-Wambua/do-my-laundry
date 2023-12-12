import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-1">
        <div>
          <h2 style={{ color: "#d6751a" }}>
            Do My <span style={{ color: "#2b9991" }}>Laundry</span> Mart
          </h2>
          <p>Cleaning since 2020</p>
        </div>
        <div>
          <a href="">Want a Launder?</a>
        </div>
        <div>
          <p>Call us now</p>
          <p>+254-793-759822</p>{" "}
        </div>
      </div>

      <div className="Links">
        <Link to="/" className="Link">
          Home
        </Link>
        <Link to="services" className="Link">
          Services
        </Link>
        <Link to="pricing" className="Link">
          {" "}
          Pricing
        </Link>
        <Link to="about-us" className="Link">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
