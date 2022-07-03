import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../../globalContext/GlobalContext";
import "./Login.css";

function SignIn() {
  const { setLogin, signed, name, handleMovieToWatchlist } =
    useContext(GlobalContext);
  return signed ? (
    <div class="welcome-text">
      <h4 class="hello-text">Hello {name}!</h4>
      <Link
        to="/"
        onClick={() => {
          alert("sign out");
          setLogin();
          handleMovieToWatchlist(null, "remove");
        }}
        class="out-text"
      >
        Sign Out
      </Link>
    </div>
  ) : (
    <Link to="/sign-up">
      <button type="button" class="btn btn-outline-light">
        SIGN IN
      </button>
    </Link>
  );
}

export default SignIn;
