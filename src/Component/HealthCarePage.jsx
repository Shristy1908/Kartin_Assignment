import React from 'react'
import img from "../Media/logo.jpg";
import { NavLink, Outlet } from "react-router-dom";
import "./HealthCarePage.css";

function HealthCarePage() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src={img} />
          <span
            style={{
              fontSize: "2rem",
              color: "aliceblue",
              fontWeight: "700",
              letterSpacing: "0.2rem",
            }}
          >
            {" "}
            <span style={{ fontSize: "4rem", color: "aliceblue" }}>E</span>
            ldercare
          </span>
        </div>
        <div className="navlinks">
          <NavLink
            to="/home"
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "#7a7979", fontWeight: 600 } : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="DoctorConsultant"
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "#7a7979", fontWeight: 600 } : undefined
            }
          >
            Docotor Consultant
          </NavLink>
          <NavLink
            to="NearByShop"
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "#7a7979", fontWeight: 600 } : undefined
            }
          >
            Near Shops
          </NavLink>
          <NavLink
            to="Meditation"
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "#7a7979", fontWeight: 600 } : undefined
            }
          >
            Meditation
          </NavLink>
          <NavLink
            to="HealthyDiet"
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "#7a7979", fontWeight: 600 } : undefined
            }
          >
            Healthy Diet
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default HealthCarePage