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
// let marvel = [];

function App() {
  const marvel = [
    {
      id: 1,
      title: "Iron Man",
      date: "May 2, 2008",
      description:
        "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      category: "stage one",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_3.jpg",
      rating: "7.1/10",
      time: "126 min",
    },
    {
      id: 2,
      title: "The Incredible Hulk",
      date: "June 13, 2008",
      description:
        "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
      category: "stage one",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theincrediblehulk_lob_crd_01_2.jpg",
      rating: "6.6/10",
      time: "112 min",
    },
    {
      id: 3,
      title: "Iron Man 2",
      date: "May 7, 2010",
      description:
        "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
      category: "stage one",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman2_lob_crd_01_3.jpg",
      rating: "6.9/10",
      time: "124 min",
    },
    {
      id: 4,
      title: "Thor",
      date: "May 6, 2011",
      description:
        "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
      category: "stage one",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thor_lob_crd_01.jpg",
      rating: "7.0/10",
      time: "115 min",
    },
    {
      id: 5,
      title: "Captain America: The First Avenger",
      date: "July 22, 2011",
      description:
        "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a warmonger and a terrorist organization.",
      category: "stage one",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamerica_lob_crd_01.jpg",
      rating: "6.9/10",
      time: "124 min",
    },
    {
      id: 6,
      title: "The Avengers",
      date: "May 4, 2012",
      description:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      category: "stage one",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg",
      rating: "8.0/10",
      time: "143 min",
    },
    {
      id: 7,
      title: "Iron Man 3",
      date: "May 3, 2013",
      description:
        "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
      category: "stage two",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman3_lob_crd_01_10.jpg",
      rating: "7.1/10",
      time: "130 min",
    },
    {
      id: 8,
      title: "Thor: The Dark World",
      date: "November 8, 2013",
      description:
        "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.",
      category: "stage two",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorthedarkworld_lob_crd_02_1.jpg",
      rating: "6.8/10",
      time: "112 min",
    },
    {
      id: 9,
      title: "Captain America: The Winter Soldier",
      date: "April 4, 2014",
      description:
        "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
      category: "stage two",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericathewintersoldier_lob_crd_01_1.jpg",
      rating: "7.8/10",
      time: "136 min",
    },
    {
      id: 10,
      title: "Guardians of the Galaxy",
      date: "August 1, 2014",
      description:
        "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
      category: "stage two",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/guardiansofthegalaxy_lob_crd_03.jpg",
      rating: "8.0/10",
      time: "121 min",
    },
    {
      id: 11,
      title: "Avengers: Age of Ultron",
      date: "May 1, 2015",
      description:
        "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      category: "stage two",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersageofultron_lob_crd_03.jpg",
      rating: "7.3/10",
      time: "141 min",
    },
    {
      id: 12,
      title: "Ant-Man",
      date: "July 17, 2015",
      description:
        "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world.",
      category: "stage two",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-man_lob_crd_01_8.jpg",
      rating: "7.3/10",
      time: "117 min",
    },
    {
      id: 13,
      title: "Captain America: Civil War",
      date: "May 6, 2016",
      description:
        "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericacivilwar_lob_crd_01_9.jpg",
      rating: "7.8/10",
      time: "147 min",
    },
    {
      id: 14,
      title: "Doctor Strange",
      date: "November 4, 2016",
      description:
        "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrange_lob_crd_01_6.jpg",
      rating: "7.1/10",
      time: "115 min",
    },
    {
      id: 15,
      title: "Guardians of the Galaxy Vol. 2",
      date: "May 5, 2017",
      description:
        "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/guardiansofthegalaxyvol.2_lob_crd_01.jpg",
      rating: "7.6/10",
      time: "136 min",
    },
    {
      id: 16,
      title: "Spider-Man: Homecoming",
      date: "July 7, 2017",
      description:
        "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manhomecoming_lob_crd_01_3.jpg",
      rating: "7.4/10",
      time: "133 min",
    },
    {
      id: 17,
      title: "Thor: Ragnarok",
      date: "November 3, 2017",
      description:
        "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorragnarok_lob_crd_03.jpg",
      rating: "7.9/10",
      time: "130 min",
    },
    {
      id: 18,
      title: "Black Panther",
      date: "February 16, 2018",
      description:
        "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpanther_lob_crd_01_4.jpg",
      rating: "7.3/10",
      time: "134 min",
    },
    {
      id: 19,
      title: "Avengers: Infinity War",
      date: "April 27, 2018",
      description:
        "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_crd_02_1.jpg",
      rating: "8.4/10",
      time: "149 min",
    },
    {
      id: 20,
      title: "Ant-Man and The Wasp",
      date: "July 6, 2018",
      description:
        "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-manthewasp_lob_crd_01.jpg",
      rating: "7.0/10",
      time: "118 min",
    },
    {
      id: 21,
      title: "Captain Marvel",
      date: "March 8, 2019",
      description:
        "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_crd_06.jpg",
      rating: "6.8/10",
      time: "125 min",
    },
    {
      id: 22,
      title: "Avengers: Endgame",
      date: "April 26, 2019",
      description:
        "After the devastating events of Ha'nokmim: Milkhemet ha'einsof (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg",
      rating: "8.4/10",
      time: "188 min",
    },
    {
      id: 23,
      title: "Spider-Man: Far From Home",
      date: "July 2, 2019",
      description:
        "Following the events of Ha'Nokmim: Sof Ha'Mis'hak (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manfarfromhome_lob_crd_04_3.jpg",
      rating: "7.4/10",
      time: "130 min",
    },
    {
      id: 24,
      title: "Black Widow",
      date: "July 9, 2021",
      description:
        "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
      category: "stage four",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_crd_06.jpg",
      rating: "6.7/10",
      time: "133 min",
    },
    {
      id: 25,
      title: "Shang-Chi and The Legend of The Ten Rings",
      date: "September 3, 2021",
      description:
        "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
      category: "stage four",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/shangchi_lob_crd_07.jpg",
      rating: "7.4/10",
      time: "133 min",
    },
    {
      id: 26,
      title: "Eternals",
      date: "November 5, 2021",
      description:
        "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
      category: "stage four",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/eternals_lob_crd_06.jpg",
      rating: "6.3/10",
      time: "157 min",
    },
    {
      id: 27,
      title: "Spider-Man: No Way Home",
      date: "December 17, 2021",
      description:
        "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
      category: "stage four",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
      rating: "8.3/10",
      time: "148 min",
    },
    {
      id: 28,
      title: "Doctor Strange in the Multiverse of Madness",
      date: "May 6, 2022",
      description:
        "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.",
      category: "stage four",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg",
      rating: "7.1/10",
      time: "126 min",
    },
    {
      id: 29,
      title: "Thor: Love and Thunder",
      date: "July 8, 2022",
      description:
        "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
      category: "stage four",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorloveandthunder_lob_crd_04.jpg",
      rating: "-",
      time: "119 min",
    },
  ];
  const [movies, setMovies] = useState([...marvel]);
  const [watchlist, setWatchlist] = useState([]);
  const [load, setLoad] = useState(false);
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState("");
  const snackbarRef = useRef(null);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("warning");

  // calling and get data from server
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
