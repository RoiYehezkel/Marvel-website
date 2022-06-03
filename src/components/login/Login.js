import { Link } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import loginContext from "../../context/loginContext";
// import React, { useState } from "react";
import "./Login.css";

function Login() {
  const { setLogin, setUserName } = useContext(loginContext);
  let name = "";
  return (
    <div class="login">
      <div class="login-container">
        <div>
          <div class="imgs">
            <div class="container-image">
              <img src="./images/login.png" alt="profile" class="profile-img" />
            </div>
          </div>
          <div>
            <h1 class="header">Login Page</h1>
            <div class="input-icons">
              <div>
                <i class="fa-solid fa-user icon"></i>
                <input
                  type="text"
                  placeholder="user-name"
                  class="name"
                  onChange={(e) => {
                    name = e.target.value;
                  }}
                />
              </div>
              <div class="second-input">
                <i class="fa-solid fa-lock icon"></i>
                <input type="password" placeholder="password" class="name" />
              </div>
            </div>
            <div class="login-button-wrapper">
              <Link to="/">
                <button
                  class="btn login-button"
                  onClick={() => {
                    setLogin();
                    setUserName(name);
                    alert("Succeeded");
                  }}
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
          <p class="link">
            {/* <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a> */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
