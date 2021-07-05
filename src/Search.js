import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
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
      </div>
      <div className="col">
        <Results results={result} />
      </div>
    </div>
  );
}
