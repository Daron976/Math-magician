import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <p className="logo"><strong>Math Magician</strong></p>
    <nav>
      <ul className="nav-link">
        <li className="link-item"><Link to="/">Home</Link></li>
        <li>|</li>
        <li className="link-item"><Link to="/calculator">Calculator</Link></li>
        <li>|</li>
        <li className="link-item"><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
    <Outlet />
  </header>
);

export default Header;
