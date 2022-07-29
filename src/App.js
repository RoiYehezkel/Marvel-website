import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/navbar/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import WatchList from "./pages/WatchList";
import SignUp from "./pages/SignUp";
import GlobalContext from "./globalContext/GlobalContext";
import Loading from "./components/loading/Loading.js";
import SnackBar from "./components/snackbar/SnackBar.js";
import Marvel from "./Marvel.json";
// let marvel = [];

function App() {
  const marvel = Marvel;
  const [movies, setMovies] = useState([...marvel]);
  const [watchlist, setWatchlist] = useState([]);
  const [load, setLoad] = useState(false);
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState("");
  const snackbarRef = useRef(null);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("warning");

  // // calling and get data from server
  // const fetchData = () => {
  //   fetch("http://localhost:8000/movies")
  //     .then((res) => res.json())
  //     .then((movie) => {
  //       marvel = movie;
  //       setMovies(movie);
  //       setLoad(false);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // create list of categories of the movies
  const categories = [
    "All",
    ...marvel
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index),
  ];

  // set login message to render in the website
  const setLogin = () => {
    setSigned(!signed);
    if (signed === true) {
      setType("info");
      setMessage("You have successfully logged out");
      snackbarRef.current.show();
    } else {
      setType("info");
      setMessage("You've logged in successfully");
      snackbarRef.current.show();
    }
  };

  // set the username after login
  const setUserName = (user) => {
    if (user.length <= 7) {
      setName(user);
    } else {
      setName(user.substring(0, 4) + "...");
    }
  };

  // function to filter the movies list by categories
  const moviesSelect = (category) => {
    if (category === "All") setMovies(marvel);
    else setMovies(marvel.filter((movie) => movie.category === category));
  };

  // function to filter the movies list by the search bar
  const serachForMovie = (val) => {
    if (val === "clear") setMovies(marvel);
    else
      setMovies(
        marvel.filter((movie) =>
          movie.title.toLowerCase().includes(val.toLowerCase())
        )
      );
  };

  // handele add movie to watchlist with diffrent cases
  const handleMovieToWatchlist = (movie, purpose) => {
    if (signed) {
      // add movie after login to website
      if (purpose === "add") {
        setWatchlist([...watchlist, movie]);
        setMessage("The movie successfully added to watchlist");
        setType("success");
        snackbarRef.current.show();
      }
      // remove movie while the user logged in to the website
      else if (purpose === "remove" && movie !== null) {
        setWatchlist(
          watchlist.filter((watchlistMovie) => watchlistMovie.id !== movie.id)
        );
        setMessage("The movie removed from the watchlist");
        setType("warning");
        snackbarRef.current.show();
      }
      // the user log out from the website
      else {
        setWatchlist([]);
      }
    } else {
      if (purpose === "add") {
        setMessage("You must first log in to the site");
        setType("error");
        snackbarRef.current.show();
      }
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        setLogin,
        signed: signed,
        setUserName,
        name: name,
        handleMovieToWatchlist,
        watchlist: watchlist,
      }}
    >
      {load ? (
        <Loading />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="movies"
              element={
                <Movies
                  categories={categories}
                  select={moviesSelect}
                  search={serachForMovie}
                  movies={movies}
                />
              }
            />
            <Route path="watchlist" element={<WatchList />} />
            <Route path="sign-up" element={<SignUp />} />
          </Routes>
        </Router>
      )}
      <SnackBar ref={snackbarRef} message={message} type={type} />
    </GlobalContext.Provider>
  );
}

export default App;
