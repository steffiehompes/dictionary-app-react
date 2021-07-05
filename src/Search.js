import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";

export default function Search(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Search row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="SearchForm">
              <input
                type="search"
                placeholder="Write something..."
                onChange={handleKeywordChange}
                autoFocus
              />
            </div>
            <div className="SearchButton">
              <input type="submit" value="Enter" />
            </div>
          </form>
          <section>
            Look up some words in our <em>dictionary</em> to find out more about
            their meaning and pronunciation.
            <div className="Introduction">Examples: women, learn, course</div>
          </section>
        </div>
        <div className="col">
          <Results results={result} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
