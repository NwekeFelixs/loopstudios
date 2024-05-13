import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import logo from "../images/logo.svg";
import closeMenu from "../images/icon-close.svg";

function MobileMenu( {show, close}) {
  const handleCloseMenu = () => {
    close(); 
};
  return (
    <div className={`mobile-menu ${show ? 'show' : ''}`}>
      <div className="mobile-brand">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>

        <div>
          <img src={closeMenu} alt="close" className="close-menu" onClick={handleCloseMenu} />
        </div>
      </div>

      <ul className="mobile-nav">
        <li className="nav-item">
          <Link to="/">About</Link>
        </li>

        <li className="nav-item">
          <Link to="/">Careers</Link>
        </li>

        <li className="nav-item">
          <Link to="/">Events</Link>
        </li>

        <li className="nav-item">
          <Link to="/">Products</Link>
        </li>

        <li className="nav-item">
          <Link to="/">Support</Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
