import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning row">
      <div className="col-4 Results-partOfSpeech">
        <h4>{props.meaning.partOfSpeech} </h4>
      </div>
      <div className="col-8 Results-definitions">
        {props.meaning.definitions.map(function (definitions, index) {
          return (
            <div key={index}>
              <p>
                {definitions.definition}
                <br />
                <em>{definitions.example}</em>
              </p>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}
