import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SignIn from "../login/SignIn";
import GlobalContext from "../../globalContext/GlobalContext";

function Navbar() {
  const { watchlist } = useContext(GlobalContext);
  const [click, setClick] = useState(false);
  let watchListLength = watchlist.length === 0 ? true : false;

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              className="logo"
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
            <li className="nav-item position-relative">
              <Link
                to="/watchlist"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                WatchList
                {watchListLength ? (
                  <span class="position-absolute translate-middle badge rounded-pill bg-danger"></span>
                ) : (
                  <span class="position-absolute translate-middle badge rounded-pill bg-danger">
                    {watchlist.length}
                  </span>
                )}
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
