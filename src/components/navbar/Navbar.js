import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SignIn from "../login/SignIn";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              class="logo"
              src="./images/avengers2.jpg"
              alt="avengers-logo"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/movies"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/watchlist"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                WatchList
              </Link>
            </li>
          </ul>
          <SignIn />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
