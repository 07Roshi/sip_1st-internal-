import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/fud.png';

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-xl bg-primary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="Logo" className='navbar-logo img-fluid' style={{ width: '40px', height: '40px' }} />
              <span className="navbar-logo-name ms-2 text-red"> RS Lunch Home </span>
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-red">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link text-red">Menu</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-red">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;