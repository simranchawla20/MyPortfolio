import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            AboutMe
          </Link>
        </li>
        <li>
          <Link to="/resume">
            Resume
          </Link>
        </li>
        <li>
          <Link to="/testimonial">
            Testimonial
          </Link>
        </li>
        <li>
          <Link to="/contact">
            ContactMe
          </Link>
        </li>
      </ul>
    </nav>
  );
}
