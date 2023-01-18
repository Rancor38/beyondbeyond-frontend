import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import dot from "../components/static-images/3-dots-bounce.svg";
import NotFoundPage from "./NotFoundPage";
import { motion } from "framer-motion";
import axios from "axios";

const Cards = (props) => {
  //passing props from App.js to determine which URL we are using.
  const url = props.url;
  const searchResult = props.searchResult;

  //Creating some State
  //State for all the monsters
  const [monsters, setMonsters] = useState(null);

  const errorFunction = () => {
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>;
  };

  //the master fetch
  useEffect(() => {
    if (!searchResult) {
      //if a non-searched fetch, we do an initial fetch of what's below
      axios
        .get(url)
        .then(res => {
          setMonsters(res.data)
        })
    } else {
      setMonsters(searchResult)
    }
  }, [searchResult]);
  
  //make axios fetch call

  if (!monsters) {
    return (
      <>
        <p>loading information</p>{" "}
        <img className="card-art" src={dot} alt="dots" />
      </>
    );
  }

  if (monsters && monsters.length < 1) {
    return <p>Oops! No monsters match this search.</p>;
  }

  return (
    <section className="container">
      {monsters.map((monster, index) => {
        if (!monster) {
          return (
            <>
              <p>loading information</p>{" "}
              <img className="card-art" src={dot} alt="dots" />
            </>
          );
        }
        return (
          // A Link to stats/the name of the monster unless its succubus because the name succubus/incubus breaks it, so when it sees that it'll turn it into 'succubus'
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ opacity: 0 }}
            viewport={{ once: true }}
            className="read-more"
            key={index}
          >
            <div className="card-image">
              <img src={monster.image} alt={monster.name} className="card-art"/>
            </div>
            <div className="card-title">
              <h3>{monster.name}</h3>
              <h4>
                {monster?.size} {monster?.type} {monster.cr ? "CR " + monster.cr : ""}
              </h4>
            </div>
          </motion.a>
        );
      })}
    </section>
  );
};

export default Cards;
