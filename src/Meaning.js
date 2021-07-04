import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning row">
      <div className="col-4 partOfSpeech">
        <h4>{props.meaning.partOfSpeech} </h4>
      </div>
      <div className="col-8 definitions">
        {props.meaning.definitions.map(function (definitions, index) {
          return (
            <div key={index}>
              <span>
                {definitions.definition}
                <br />
                <span className="Description">Example: </span>
                <span className="Example">{definitions.example}</span>
                <br />
                <Synonyms synonyms={definitions.synonyms} />
              </span>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}
