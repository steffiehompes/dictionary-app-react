import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Search.css";

export default function Search(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResult(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);
    let pexelsApiKey =
      "563492ad6f91700001000001e0583f5c447746bb8445a500bfb4f09c";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
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
            <div className="Introduction">Suggested: women, learn, course</div>
          </section>
        </div>
        <div className="col">
          <Results results={result} />
        </div>
        <div className="col-2">
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
