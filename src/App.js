import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import loginContext from "./context/loginContext";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";

function App() {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState("");
  const setLogin = () => setSigned(!signed);
  const setUserName = (user) => setName(user);

  return (
    <loginContext.Provider
      value={{
        setLogin: setLogin,
        signed: signed,
        setUserName: setUserName,
        name: name,
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </loginContext.Provider>
  );
}

export default App;
