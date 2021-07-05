import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="partOfSpeech">
        <h4>{props.meaning.partOfSpeech} </h4>
      </div>
      <div className="definitions">
        {props.meaning.definitions.map(function (definitions, index) {
          return (
            <div key={index}>
              <span>
                {definitions.definition}

                <div className="Example">Example:"{definitions.example}"</div>

                <Synonyms synonyms={definitions.synonyms} />
              </span>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}
