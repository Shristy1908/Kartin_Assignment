import React from 'react';
import "./Home.css";
import img from "../Media/home.jpg"

function Home() {
  return (
    <div className='homecontent'>
        <h1>
            Welcome To Eldercare
        </h1>

        <img src={img}/>
    </div>
  );
}

export default Home