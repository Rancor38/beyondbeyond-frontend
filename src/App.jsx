import { Route, Routes } from "react-router-dom";
import Cards from "./pages/Cards";
import Header from "./components/Header";
import About from "./pages/About";
import { useState } from "react";
import MonsterEditor from "./pages/Monster";
import "./stylesheets/index.css";
import axios from "axios";
import { useEffect } from "react";
import Admin from "./pages/Admin";

const App = () => {
    // Const variables for the SRD Monsters, these will be passed down as props to the Cards component as 'url'.
  const url = "http://localhost:4000/monster/";
  
  //at the App level, check if the user is logged in
  const checkForLogin = localStorage.getItem("IAmLogged?")
  useEffect(() => {
    console.log(checkForLogin)
})
  
    // set search's state
    const [searchInput, setSearchInput] = useState("");
    const [searchResult, setSearchResult] = useState("");

    const searchUrl = `http://localhost:4000/monster/name/${searchInput}`;

    const fetchSearch = () => {
        if (searchInput.length <= 1) {
            axios.get(url).then((res) => {
                setSearchResult(res.data);
            });
        } else {
            axios.post(searchUrl).then((res) => {
                setSearchResult(res.data);
            });
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        fetchSearch();
    };
    const resetChange = () => {
        setSearchInput("");
        setSearchResult("");
    };

    return (
        <div>
            {/* Printing the Header Component within the App */}
            <Header
                handleChange={handleChange}
                searchInput={searchInput}
                resetChange={resetChange}
            />

            {/* Printing the Card element for each page of results from the API, with each having a route */}
            <Routes>
                <Route
                    path="/"
                    element={<Cards url={url} searchResult={searchResult} />}
                />
                <Route path="/monster/:id" element={<MonsterEditor />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
            </Routes>
        </div>
    );
};

export default App;
