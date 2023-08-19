import React from 'react';
import ReactPlayer from "react-player";
import "./Meditaion.css"

function Meditation() {
  return (
    <div className="meditation-container">
      
      <ReactPlayer url="https://youtu.be/uNiJW0KMwf4" />
      <ReactPlayer url="https://youtu.be/DulNz2CkoHI" />
      <ReactPlayer url="https://www.youtube.com/live/v1vRphAv7C4?feature=share" />
      <ReactPlayer url="https://youtu.be/CDnEKUDNwMM" />
      <ReactPlayer url="https://youtu.be/Hzi3PDz1AWU" />
      <ReactPlayer url="https://youtu.be/uDuPL6wfWvQ" />
      
    </div>
  );
}

export default Meditation