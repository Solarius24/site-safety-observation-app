import React from "react";
import "./HomeScreen.css";
import { Button } from "../components/Button";
import { Navigate, useNavigate } from "react-router-dom";

export function HomeScreen() {
  const navigate = useNavigate();
  return (
    <div className="grid-container">
      <header>
        <h4>BALFORT BEATY VINCI SYSTRA WORKING IN PARTNERSHIP WITH HS2</h4>
        <h4>SAFE AT HEART</h4>
      </header>
      <div className="image">
        <img src={require("../img/homeScreen.jpg")} alt=""></img>
      </div>

      <h4>SITE SAFETY OBSERVATION APP</h4>
      <div className="image">
        <img src={require("../img/goldenRules.jpg")} alt=""></img>
      </div>

      <div className="buttons">
        <button style={{background:"lightgreen"}} onClick={() => navigate("/good_practice")}>
          Good Practice
        </button>
        <button style={{background:"red"}} onClick={() => navigate("/close_call")}>Close Call</button>
      </div>
      <footer>
        <p>Powered by BALTIC ENGINEERS LTD</p>
      </footer>
    </div>
  );
}
