import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import { useContext } from "react";
import loginContext from "../../context/loginContext";
import "./Login.css";

function SignIn() {
  const { setLogin, signed, name } = useContext(loginContext);
  return signed ? (
    <>
      <h4 class="welcome-text">Hello {name}!</h4>
      <Link
        to="/"
        onClick={() => {
          alert("sign out");
          setLogin();
        }}
        class="out-text"
      >
        Sign Out
      </Link>
    </>
  ) : (
    // <>
    //   <Button buttonStyle="btn--outline">SIGN IN</Button>
    // </>
    <Link to="/sign-up">
      <button type="button" class="btn btn-outline-light">
        SIGN IN
      </button>
    </Link>
  );
}

export default SignIn;
