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
      <nav class="navbar">
        <div class="navbar-container">
          <Link to="/" class="navbar-logo" onClick={closeMobileMenu}>
            <img
              class="logo"
              src="./images/avengers2.jpg"
              alt="avengers-logo"
            />
          </Link>
          <div class="menu-icon" onClick={handleClick}>
            <i class={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul class={click ? "nav-menu active" : "nav-menu"}>
            <li class="nav-item">
              <Link to="/" class="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/movies" class="nav-links" onClick={closeMobileMenu}>
                Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/watchlist" class="nav-links" onClick={closeMobileMenu}>
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
