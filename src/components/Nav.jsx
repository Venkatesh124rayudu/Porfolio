import React from 'react';
import { Link } from 'react-router-dom';  // Use Link from react-router-dom for navigation
import './Nav.css';

const Nav = () => {
  return (
    <div className="card2">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link> {/* Link to Home */}
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link> {/* Link to About */}
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link> {/* Link to Projects */}
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link> {/* Link to Contact */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
