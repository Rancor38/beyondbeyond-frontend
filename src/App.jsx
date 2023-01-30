import { Route, Routes } from "react-router-dom";
import Cards from "./pages/Cards";
import Header from "./components/Header";
import About from "./pages/About";
import { useState } from "react";
import MonsterEditor from "./pages/Monster";
import './stylesheets/index.css'
import axios from "axios";

const App = () => {
  // Const variables for the SRD Monsters, these will be passed down as props to the Cards component as 'url'.
  const url = "http://localhost:4000/monster/";


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
    console.log(searchInput);
    fetchSearch();
  };
  const resetChange = () => {
    setSearchInput("");
    setSearchResult("");
  };

  return (
    <div className="app">
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
        </Routes>
      </div>
  );
};

export default App;
