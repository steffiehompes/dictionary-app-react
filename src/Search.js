import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form action="">
        <div className="SearchForm">
          <input type="text" placeholder="Write something..." />
        </div>
        <div classname="SearchButton">
          <input type="submit" value="Enter" />
        </div>
      </form>
    </div>
  );
}
