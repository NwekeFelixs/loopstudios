import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import logo from "../images/logo.svg";
import menu from "../images/icon-hamburger.svg";
import MobileMenu from "./MobileMenu";

function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
};

const close = () => {
    setOpenMenu(false);
};

  return (
    <header className="header">
      <div className="nav">
        <Link>
          <img src={logo} alt="logo" />
        </Link>
        <ul className="navbar">
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

        <img src={menu} alt="menu" className="menu-icon"onClick={toggleMenu} />
        <MobileMenu show={openMenu} close={close} />
      </div>
      <div className="banner">
        <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </div>
    </header>
  );
}

export default Header;
