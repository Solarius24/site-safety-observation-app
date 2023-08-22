import React,{useState} from "react";
import "./HomeScreen.css";
import { Button } from "../components/Button";
import { Navigate, useNavigate } from "react-router-dom";
import { Modal } from "../components/Modal";

export function HomeScreen() {
  const [showModal, setShowModal] = useState(false)
  const [formType ,setFormType] = useState("")
  const navigate = useNavigate();

  function goodPracticeHandler(){
    setShowModal(true)
    setFormType("good_practice")
    // navigate("/good_practice")

  }

  function closeCallHandler(){
  setShowModal(true)
  setFormType("close_call")
    // navigate("/close_call")

  }

  return (
    
    <div className="grid-container">
     {showModal && <Modal formType={formType} setShowModal = {setShowModal}/>}
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
        <button style={{background:"lightgreen"}} onClick={goodPracticeHandler}>
          Good Practice
        </button>
        <button style={{background:"red"}} onClick={closeCallHandler}>Close Call</button>
      </div>
      <footer>
        <p>Powered by BALTIC ENGINEERS LTD</p>
      </footer>
    </div>
  );
}
