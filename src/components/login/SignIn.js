import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../../globalContext/GlobalContext";
import "./Login.css";

function SignIn() {
  const { setLogin, signed, name, handleMovieToWatchlist } =
    useContext(GlobalContext);
  return signed ? (
    <div className="welcome-text">
      <h4 className="hello-text">Hello {name}!</h4>
      <Link
        to="/"
        onClick={() => {
          setLogin();
          handleMovieToWatchlist(null, "remove");
        }}
        className="out-text"
      >
        Sign Out
      </Link>
    </div>
  ) : (
    <Link to="/sign-up">
      <button type="button" className="btn btn-outline-light">
        SIGN IN
      </button>
    </Link>
  );
}

export default SignIn;
