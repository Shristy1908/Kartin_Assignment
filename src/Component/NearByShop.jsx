import React from 'react';
import "./NearByShop.css";
import data from "../Data/NearShopShop.json";
import { FaStar } from "react-icons/fa";

function NearByShop() {
  return (
    <div className="Shop-container">
      <h1>Our Online Local Shops</h1>
      <hr />
      <div className="ShopList">
        {data.map((data, index) => {
          return (
            <div className="cards" key={index}>
              <h2 className="type">{data.type}</h2>
              <img src={data.img}/>
              <h4>
                Provide Facility: <span>{data.timing}</span>
              </h4>
              <h4>
                Mobile: <span>{data.contact}</span>
              </h4>
              <h4>
                Rating: <span>{data.rating} </span>
                <FaStar className="star" />
              </h4>
              <h4>
                Address: <span>{data.address} </span>

              </h4>
              <button className="btn">Contact Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NearByShop