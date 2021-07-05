import React from "react";
import VolumeUp from "@material-ui/icons/VolumeUp";
import "./Phonetics.css";

export default function Phonetics(props) {
  const audio = new Audio(props.phonetics.audio);
  const playSound = (audioFile) => {
    audioFile.play();
  };
  return (
    <div className="Phonetics">
      {props.phonetics.text}
      <VolumeUp
        className="VolumeIcon"
        onClick={() => playSound(audio)}
      ></VolumeUp>
    </div>
  );
}
