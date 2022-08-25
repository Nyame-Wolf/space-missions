import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../../img/planet.png';
import './Navbar.css';

function Navigation() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/dragons',
      text: 'Dragons',
    },
    {
      id: 4,
      path: '/profile',
      text: 'My Profile',
    },
  ];
  return (
    <nav>
      <div className="navContainer">
        <div className="logo-wrapper">
          <img src={planet} alt="space logo" />
          <h3 className="logo-text">Space Travelers Hub</h3>
        </div>
        <ul className="navLinks">
          {links.map((link) => (
            <li className="NavLink" key={link.id}>
              <NavLink to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
