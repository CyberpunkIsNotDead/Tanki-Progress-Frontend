import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = (props: any) => {
  return (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
      <div className='navbar-brand'>
        Tanki Progress
      </div>
      
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/"
            exact
            >
              Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/wall"
            >
              Wall
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/summary"
            >
              Summary
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/monitoring"
            >
              Monitoring
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/logs"
            >
              Logs
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
