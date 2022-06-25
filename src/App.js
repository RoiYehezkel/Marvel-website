import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import loginContext from "./context/loginContext";
import "./App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import WatchList from "./pages/WatchList";
import SignUp from "./pages/SignUp";
import Footer from "./components/footer/Footer.js";

function App() {
  const marvel = [
    {
      id: 1,
      title: "Iron Man",
      date: "May 2, 2008",
      description:
        "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
      category: "stage one",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_3.jpg",
      trailer:
        "http://f1.media.brightcove.com/4/5359769168001/5359769168001_6101116661001_5786306590001.mp4?pubId=5359769168001&videoId=5786306590001",
      rating: "PG-13",
      time: "126 min",
    },
    {
      id: 2,
      title: "The Incredible Hulk",
      date: "June 13, 2008",
      description:
        "In this new beginning, scientist Bruce Banner desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes the unbridled force of rage within him: The Hulk. Living in the shadows--cut off from a life he knew and the woman he loves, Betty Ross--Banner struggles to avoid the obsessive pursuit of his nemesis, General Thunderbolt Ross and the military machinery that seeks to capture him and brutally exploit his power. As all three grapple with the secrets that led to the Hulk's creation, they are confronted with a monstrous new adversary known as the Abomination, whose destructive strength exceeds even the Hulk's own. One scientist must make an agonizing final choice: accept a peaceful life as Bruce Banner or find heroism in the creature he holds inside--The Incredible Hulk.",
      category: "stage one",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theincrediblehulk_lob_crd_01_2.jpg",
      trailer:
        "http://f1.media.brightcove.com/4/5359769168001/5359769168001_5786825321001_5786823800001.mp4?pubId=5359769168001&videoId=5786823800001",
      rating: "PG-13",
      time: "112 min",
    },
    {
      id: 3,
      title: "Iron Man 2",
      date: "May 7, 2010",
      description:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and 'Rhodey' Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.",
      category: "stage one",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman2_lob_crd_01_3.jpg",
      trailer:
        "http://f1.media.brightcove.com/4/5359769168001/5359769168001_5786631049001_5786616628001.mp4?pubId=5359769168001&videoId=5786616628001",
      rating: "PG-13",
      time: "124 min",
    },
    {
      id: 4,
      title: "Thor",
      date: "May 6, 2011",
      description:
        "As the son of Odin, king of the Norse gods, Thor will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki, Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
      category: "stage one",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thor_lob_crd_01.jpg",
      trailer: "",
      rating: "PG-13",
      time: "115 min",
    },
    {
      id: 5,
      title: "Captain America: The First Avenger",
      date: "July 22, 2011",
      description:
        "Marvel's 'Captain America: The First Avenger' focuses on the early days of the Marvel Universe when Steve Rogers volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America.",
      category: "stage one",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamerica_lob_crd_01.jpg",
      trailer: "",
      rating: "PG-13",
      time: "124 min",
    },
    {
      id: 6,
      title: "The Avengers",
      date: "May 4, 2012",
      description:
        "Marvel Studios presents in association with Paramount Pictures 'Marvel's The Avengers'--the super hero team up of a lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.",
      category: "stage one",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg",
      trailer: "",
      rating: "PG-13",
      time: "143 min",
    },
    {
      id: 7,
      title: "Iron Man 3",
      date: "May 3, 2013",
      description:
        "Marvel's 'Iron Man 3' pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man.",
      category: "stage two",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman3_lob_crd_01_10.jpg",
      trailer: "",
      rating: "PG-13",
      time: "130 min",
    },
    {
      id: 8,
      title: "Thor: The Dark World",
      date: "November 8, 2013",
      description:
        "In the aftermath of Marvel's 'Thor' and 'Marvel's The Avengers,' Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
      category: "stage two",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorthedarkworld_lob_crd_02_1.jpg",
      trailer:
        "http://f1.media.brightcove.com/4/5359769168001/5359769168001_5793460328001_5793459089001.mp4?pubId=5359769168001&videoId=5793459089001",
      rating: "PG-13",
      time: "112 min",
    },
    {
      id: 9,
      title: "Captain America: The Winter Soldier",
      date: "April 4, 2014",
      description:
        "After the cataclysmic events in New York with The Avengers, Marvel's 'Captain America: The Winter Soldier,' finds Steve Rogers, aka Captain America, living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy--the Winter Soldier.",
      category: "stage two",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericathewintersoldier_lob_crd_01_1.jpg",
      trailer:
        "http://f1.media.brightcove.com/4/5359769168001/5359769168001_5791036522001_5791035995001.mp4?pubId=5359769168001&videoId=5791035995001",
      rating: "PG-13",
      time: "136 min",
    },
    {
      id: 10,
      title: "Guardians of the Galaxy",
      date: "August 1, 2014",
      description:
        "An action-packed, epic space adventure, Marvel's 'Guardians of the Galaxy,' expands the Marvel Cinematic Universe into the cosmos, where brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitions that threaten the entire universe. To evade the ever-persistent Ronan, Quill is forced into an uneasy truce with a quartet of disparate misfits--Rocket, a gun-toting raccoon; Groot, a tree-like humanoid; the deadly and enigmatic Gamora; and the revenge-driven Drax the Destroyer. But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he must do his best to rally his ragtag rivals for a last, desperate stand--with the galaxy's fate in the balance.",
      category: "stage two",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/guardiansofthegalaxy_lob_crd_03.jpg",
      trailer:
        "http://f1.media.brightcove.com/4/5359769168001/5359769168001_5791075615001_5791076711001.mp4?pubId=5359769168001&videoId=5791076711001",
      rating: "PG-13",
      time: "121 min",
    },
    {
      id: 11,
      title: "Avengers: Age of Ultron",
      date: "May 1, 2015",
      description:
        "Marvel Studios presents “Avengers: Age of Ultron,” the epic follow-up to the biggest Super Hero movie of all time. When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes, including Iron Man, Captain America, Thor, The Incredible Hulk, Black Widow and Hawkeye, are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to the Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
      category: "stage two",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersageofultron_lob_crd_03.jpg",
      trailer:
        "http://f1.media.brightcove.com/4/5359769168001/5359769168001_5790938407001_5790937227001.mp4?pubId=5359769168001&videoId=5790937227001",
      rating: "PG-13",
      time: "141 min",
    },
    {
      id: 12,
      title: "Ant-Man",
      date: "July 17, 2015",
      description:
        "The next evolution of the Marvel Cinematic Universe brings a founding member of The Avengers to the big screen for the first time with Marvel Studios' 'Ant-Man.' Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
      category: "stage two",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-man_lob_crd_01_8.jpg",
      trailer:
        "http://f1.media.brightcove.com/4/5359769168001/5359769168001_5790937190001_5790932937001.mp4?pubId=5359769168001&videoId=5790932937001",
      rating: "PG-13",
      time: "117 min",
    },
    {
      id: 13,
      title: "Captain America: Civil War",
      date: "May 6, 2016",
      description:
        "Steve Rogers leads the newly formed team of Avengers in their continued efforts to safeguard humanity. But after another incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability, headed by a governing body to oversee and direct the team. The new status quo fractures the Avengers, resulting in two camps—one led by Steve Rogers and his desire for the Avengers to remain free to defend humanity without government interference, and the other following Tony Stark’s surprising decision to support government oversight and accountability.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericacivilwar_lob_crd_01_9.jpg",
      trailer:
        "http://f1.media.brightcove.com/4/5359769168001/5359769168001_5790939124001_5790932946001.mp4?pubId=5359769168001&videoId=5790932946001",
      rating: "PG-13",
      time: "147 min",
    },
    {
      id: 14,
      title: "Doctor Strange",
      date: "November 4, 2016",
      description:
        "From Marvel Studios comes “Doctor Strange,” the story of world-famous neurosurgeon Dr. Stephen Strange whose life changes forever after a horrific car accident robs him of the use of his hands. When traditional medicine fails him, he is forced to look for healing, and hope, in an unlikely place—a mysterious enclave known as Kamar-Taj. Before long Strange—armed with newly acquired magical powers—is forced to choose whether to return to his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrange_lob_crd_01_6.jpg",
      trailer:
        "http://f1.media.brightcove.com/4/5359769168001/5359769168001_5790937899001_5790930123001.mp4?pubId=5359769168001&videoId=5790930123001",
      rating: "PG-13",
      time: "115 min",
    },
    {
      id: 15,
      title: "Guardians of the Galaxy Vol. 2",
      date: "May 5, 2017",
      description:
        "Set to the backdrop of 'Awesome Mixtape #2,' Marvel's Guardians of the Galaxy Vol. 2 continues the team's adventures as they traverse the outer reaches of the cosmos. The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage. Old foes become new allies and fan-favorite characters from the classic comics will come to our heroes' aid as the Marvel cinematic universe continues to expand.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/guardiansofthegalaxyvol.2_lob_crd_01.jpg",
      trailer:
        "http://f1.media.brightcove.com/4/5359769168001/5359769168001_5790937913001_5790932955001.mp4?pubId=5359769168001&videoId=5790932955001",
      rating: "PG-13",
      time: "136 min",
    },
    {
      id: 16,
      title: "Spider-Man: Homecoming",
      date: "July 7, 2017",
      description:
        "A young Peter Parker/Spider-Man (Tom Holland), who made his sensational debut in Captain America: Civil War, begins to navigate his newfound identity as the web-slinging super hero in Spider-Man: Homecoming. Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May (Marisa Tomei), under the watchful eye of his new mentor Tony Stark (Robert Downey, Jr.). Peter tries to fall back into his normal daily routine – distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man – but when the Vulture (Michael Keaton) emerges as a new villain, everything that Peter holds most important will be threatened.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manhomecoming_lob_crd_01_3.jpg",
      trailer:
        "http://f1.media.brightcove.com/4/5359769168001/5359769168001_5790950334001_5790932452001.mp4?pubId=5359769168001&videoId=5790932452001",
      rating: "PG-13",
      time: "133 min",
    },
    {
      id: 17,
      title: "Thor: Ragnarok",
      date: "November 3, 2017",
      description:
        "Thor is imprisoned on the other side of the universe without his mighty hammer and finds himself in a race against time to get back to Asgard to stop Ragnarok—the destruction of his homeworld and the end of Asgardian civilization—at the hands of an all-powerful new threat, the ruthless Hela. But first he must survive a deadly gladiatorial contest that pits him against his former ally and fellow Avenger—the Incredible Hulk!",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorragnarok_lob_crd_03.jpg",
      trailer:
        "http://f1.media.brightcove.com/4/5359769168001/5359769168001_5793458190001_5793457593001.mp4?pubId=5359769168001&videoId=5793457593001",
      rating: "PG-13",
      time: "130 min",
    },
    {
      id: 18,
      title: "Black Panther",
      date: "February 16, 2018",
      description:
        "Marvel Studios' “Black Panther” follows T'Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T'Challa's mettle as king—and Black Panther—is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpanther_lob_crd_01_4.jpg",
      trailer:
        "http://f1.media.brightcove.com/4/5359769168001/5359769168001_5738799966001_5738791807001.mp4?pubId=5359769168001&videoId=5738791807001",
      rating: "PG-13",
      time: "134 min",
    },
    {
      id: 19,
      title: "Avengers: Infinity War",
      date: "April 27, 2018",
      description:
        "An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' 'Avengers: Infinity War' brings to the screen the ultimate, deadliest showdown of all time. As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_crd_02_1.jpg",
      trailer: "",
      rating: "PG-13",
      time: "149 min",
    },
    {
      id: 20,
      title: "Ant-Man and The Wasp",
      date: "July 6, 2018",
      description:
        "From the Marvel Cinematic Universe comes a new chapter featuring heroes with the astonishing ability to shrink: “Ant-Man and The Wasp.” In the aftermath of “Captain America: Civil War,” Scott Lang (Paul Rudd) grapples with the consequences of his choices as both a Super Hero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he’s confronted by Hope van Dyne (Evangeline Lilly) and Dr. Hank Pym (Michael Douglas) with an urgent new mission. Scott must once again put on the suit and learn to fight alongside The Wasp as the team works together to uncover secrets from their past.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-manthewasp_lob_crd_01.jpg",
      trailer:
        "http://f1.media.brightcove.com/4/5359769168001/5359769168001_5722253819001_5722251911001.mp4?pubId=5359769168001&videoId=5722251911001",
      rating: "PG-13",
      time: "118 min",
    },
    {
      id: 21,
      title: "Captain Marvel",
      date: "March 8, 2019",
      description:
        "Set in the 1990s, Marvel Studios' 'Captain Marvel' is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe's most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_crd_06.jpg",
      trailer: "",
      rating: "PG-13",
      time: "125 min",
    },
    {
      id: 22,
      title: "Avengers: Endgame",
      date: "April 26, 2019",
      description:
        "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films, 'Avengers: Endgame.'",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg",
      trailer: "",
      rating: "PG-13",
      time: "188 min",
    },
    {
      id: 23,
      title: "Spider-Man: Far From Home",
      date: "July 2, 2019",
      description:
        "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
      category: "stage three",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manfarfromhome_lob_crd_04_3.jpg",
      trailer: "",
      rating: "PG-13",
      time: "130 min",
    },
    {
      id: 24,
      title: "Black Widow",
      date: "July 9, 2021",
      description:
        "In Marvel Studios' action-packed spy thriller “Black Widow,” Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
      category: "stage four",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_crd_06.jpg",
      trailer: "",
      rating: "PG-13",
      time: "133 min",
    },
    {
      id: 25,
      title: "Shang-Chi and The Legend of The Ten Rings",
      date: "September 3, 2021",
      description:
        "Marvel Studios' 'Shang-Chi and The Legend of The Ten Rings' stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film also stars Tony Leung as Wenwu, Awkwafina as Shang-Chi's friend Katy and Michelle Yeoh as Jiang Nan, as well as Fala Chen, Meng'er Zhang, Florian Munteanu and Ronny Chieng.",
      category: "stage four",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/shangchi_lob_crd_07.jpg",
      trailer: "",
      rating: "PG-13",
      time: "133 min",
    },
    {
      id: 26,
      title: "Eternals",
      date: "November 5, 2021",
      description:
        "Marvel Studios' Eternals features an exciting new team of Super Heroes in the Marvel Cinematic Universe, ancient aliens who have been living on Earth in secret for thousands of years. Following the events of Avengers: Endgame, an unexpected tragedy forces them out of the shadows to reunite against mankind's most ancient enemy, the Deviants.",
      category: "stage four",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/eternals_lob_crd_06.jpg",
      trailer: "",
      rating: "PG-13",
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
      trailer: "",
      rating: "PG-13",
      time: "148 min",
    },
    {
      id: 28,
      title: "Doctor Strange in the Multiverse of Madness",
      date: "May 6, 2022",
      description:
        "Marvel Studios' 'Doctor Strange in the Multiverse of Madness'—a thrilling ride through the Multiverse with Doctor Strange, his trusted friend Wong and Wanda Maximoff, aka Scarlet Witch. 'Doctor Strange in the Multiverse of Madness' opens in U.S. theaters on May 6, 2022.",
      category: "stage four",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg",
      trailer: "",
      rating: "PG-13",
      time: "126 min",
    },
    {
      id: 29,
      title: "Thor: Love and Thunder",
      date: "July 8, 2022",
      description:
        "Marvel Studios' THOR: LOVE AND THUNDER stars Chris Hemsworth, Tessa Thompson, Natalie Portman and Christian Bale. Directed by Taika Waititi. In theaters July 8, 2022.",
      category: "stage four",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorloveandthunder_lob_crd_04.jpg",
      trailer: "",
      rating: "PG-13",
      time: "119 min",
    },
  ];
  const [movies, setMovies] = useState([...marvel]);
  const categories = [
    "All",
    ...marvel
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index),
  ];

  const [signed, setSigned] = useState(false);
  const [name, setName] = useState("");
  const setLogin = () => setSigned(!signed);
  const setUserName = (user) => {
    if (user.length <= 7) {
      setName(user);
    } else {
      setName(user.substring(0, 4) + "...");
    }
  };
  const moviesSelect = (category) => {
    if (category === "All") setMovies(marvel);
    else setMovies(marvel.filter((movie) => movie.category === category));
  };
  const serachForMovie = (val) => {
    if (val === "clear") setMovies(marvel);
    else
      setMovies(
        marvel.filter((movie) =>
          movie.title.toLowerCase().includes(val.toLowerCase())
        )
      );
  };

  return (
    <loginContext.Provider
      value={{
        setLogin: setLogin,
        signed: signed,
        setUserName: setUserName,
        name: name,
        movies: movies,
      }}
    >
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
              />
            }
          />
          <Route path="watchlist" element={<WatchList />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </loginContext.Provider>
  );
}

export default App;
