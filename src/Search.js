import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
