import React from 'react';
import "./HealthyDiet.css";
import ReactPlayer from "react-player";


function HealthyDiet() {
  return (
    <div className="healthyDiet-container">
      <ReactPlayer url="https://youtu.be/ZLGhElwhXzs" />
      <ReactPlayer url="https://youtu.be/DRomQhvuFWA" />
      <ReactPlayer url="https://youtu.be/pS0FB6mi6e0" />
      <ReactPlayer url="https://youtu.be/g5HeVRgcGD8" />
      <ReactPlayer url="https://youtu.be/M4UllYxBFqc" />
      <ReactPlayer url="https://youtu.be/hCQ5hl9m8Jk" />
    </div>
  );
}

export default HealthyDiet