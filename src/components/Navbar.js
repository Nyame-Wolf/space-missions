import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../img/planet.png';
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
      text: 'Mission',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My Profile',
    },
  ];
  return (
    <nav>
      <div className="navContainer">
        <img src={planet} alt="space logo" />
        <h3 className="logo">Space Travelers Hub</h3>
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
