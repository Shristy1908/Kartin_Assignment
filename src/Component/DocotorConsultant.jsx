import React from 'react';
import "./DocotorConsultant.css"
import data from "../Data/DoctorConsultant.json";
import { FaStar } from "react-icons/fa";

function DocotorConsultant() {
  return (
    <div className="Consultant-container">
    
        <h1>Our Docotors</h1><hr/>
        <div className="DoctorsList">
          {data.map((data, index) => {
            return (
              <div className="cards" key={index}>
                <h2 className='doctortype'>{data.docotortype}</h2>
                <img className="image" src={data.img} />
                <h4>
                  Name: <span>{data.docotorname}</span>
                </h4>
                <h4>
                  Mobile: <span>{data.DocotorNo}</span>
                </h4>
                <h4>
                  Rating: <span>{data.rating} </span>
                  <FaStar className="star" />
                </h4>
                <button className="btn">Book Slot</button>
              </div>
            );
          })}
        </div>
      
    </div>
  );
}

export default DocotorConsultant