// src/components/Nav.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (
    <>
    <div className="card2">
      <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <a href='#home' className="nav-link">Home</a>
        </li>
        <li className="nav-item">
        <a href="#about" className="nav-link">About</a>
        </li>
        {/* <li className="nav-item">
          <Link to="/skills" className="nav-link">Skills</Link>
        </li> */}
        <li className="nav-item">
          <a href='#projects' className="nav-link">Projects</a>
        </li>
        <li className="nav-item">
          <a href='#contact' className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
    </div>
    </>
    
  );
};

export default Nav;
