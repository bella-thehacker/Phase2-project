import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
      </li>
      <li className="navbar-item">
        <NavLink to="/partners" activeClassName="active">
          Our Partners
        </NavLink>
      </li>
      <li className="navbar-item">
        <NavLink to="/academics" activeClassName="active">
          Academics
        </NavLink>
      </li>
      <li className="navbar-item">
        <NavLink to="/co-curricular" activeClassName="active">
          Co-Curricular
        </NavLink>
      </li>
      <li className="navbar-item">
        <NavLink to="/campus" activeClassName="active">
          Campus
        </NavLink>
      </li>
      <li className="navbar-item">
        <NavLink to="/apply-now" activeClassName="active">
          Apply Now
        </NavLink>
      </li>
      
    </ul>
  </nav>
);

export default Navbar;
