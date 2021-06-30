import React, { useState } from "react";
import axios from "axios"
import "./Search.css";

export default function Search() {
  const [keyword, setKeyword] = useState("");

  function handleResponse (response) {
    console.log(response)

  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en_US/coffee"
    
    axios.get(apiUrl).then(handleResponse)
}

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="SearchForm">
          <input
            type="search"
            placeholder="Write something..."
            onChange={handleKeywordChange}
          />
        </div>
        <div className="SearchButton">
          <input type="submit" value="Enter" />
        </div>
      </form>
    </div>
  );
}
