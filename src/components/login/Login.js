import { Link } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import GlobalContext from "../../globalContext/GlobalContext";
import "./Login.css";

function Login() {
  const { setLogin, setUserName } = useContext(GlobalContext);
  let name = "";
  return (
    <div className="login">
      <div className="login-container">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img
                src="./images/login.png"
                alt="profile"
                className="profile-img"
              />
            </div>
          </div>
          <div>
            <h1 className="header">Login Page</h1>
            <div className="input-icons">
              <div>
                <i className="fa-solid fa-user icon"></i>
                <input
                  type="text"
                  placeholder="user-name"
                  className="name"
                  onChange={(e) => {
                    name = e.target.value;
                  }}
                />
              </div>
              <div className="second-input">
                <i className="fa-solid fa-lock icon"></i>
                <input
                  type="password"
                  placeholder="password"
                  className="name"
                />
              </div>
            </div>
            <div className="login-button-wrapper">
              <Link to="/">
                <button
                  className="btn login-button"
                  onClick={() => {
                    setLogin();
                    setUserName(name);
                  }}
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
