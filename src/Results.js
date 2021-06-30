import React from "react";
import "./Results.css";

export default function Results() {
  return (
    <div className="Results">
      <h5>You searched for:</h5>
      <h2 className="Results-word">
        {" "}
        Coffee <button>🎙</button>
      </h2>
      <h4>/ˈkɒfi/</h4>
      <div className="row">
        <div className="col-3 Results-grammar">Noun</div>
        <div className="col-6 Results-explanation">
          a hot drink made from the roasted and ground seeds (coffee beans) of a
          tropical shrub. "a cup of coffee"{" "}
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"
        alt="coffee"
        width="150"
        height="100"
        className="img-fluid m-2"
      />
      <img
        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"
        alt="coffee"
        width="150"
        height="100"
        className="img-fluid m-2"
      />
      <img
        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"
        alt="coffee"
        width="150"
        height="100"
        className="img-fluid m-2"
      />
    </div>
  );
}
