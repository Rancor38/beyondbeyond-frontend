import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import dot from "../static-images/3-dots-bounce.svg";
import AddMonsterButton from "../components/addMonster/AddMonsterButton";
import { motion } from "framer-motion";
import axios from "axios";

const Cards = (props) => {
  //passing props from App.js to determine which URL we are using.
  const url = props.url;
  const searchResult = props.searchResult;

  //Creating some State
  //State for all the monsters
  const [monsters, setMonsters] = useState(null);

  // a function to check local storage for the logged in token
  const checkForLogin = () => {
    return localStorage.getItem("IAmLogged?")
  } 

  //the master fetch
  useEffect(() => {
    checkForLogin()
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
  

//return if no monsters array recieved 
  if (!monsters) {
    return (
      <>
        <p>loading information</p>{" "}
        <img className="card-art" src={dot} alt="dots" />
      </>
    );
  }
// return if monster array is blank
  if (monsters && monsters.length < 1) {
    return <p>Oops! No monsters match this search.</p>;
  }

  return (
    <>
    {checkForLogin() && <AddMonsterButton/>}
    <section className="card-container">
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ opacity: 0 }}
            viewport={{ once: true }}
            className="read-more"
            key={index}
          >
            <Link to={`/monster/${monster._id}`}>
            <div className="card-image">
              <img src={monster.image} alt={monster.name} className="card-art"/>
            </div>
            <div className="card-title">
              <h3>{monster.name}</h3>
              <h4>
                {monster?.size} {monster?.type} {monster.cr ? "CR " + monster.cr : ""}
              </h4>
            </div>
            </Link>
          </motion.div>
        );
      })}
    </section>
    </>
  );
};

export default Cards;
