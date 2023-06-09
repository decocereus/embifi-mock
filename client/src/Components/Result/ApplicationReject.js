import React from "react";
import { useNavigate } from "react-router-dom";
import MobileSignalTimeBar from "../Common/MobileSignalTimeBar";
import SplashButton from "../Common/SplashButton";
import "./ApplicationReject.css";

export default function ApplicationReject() {

  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/dashboard")
  }
  return (
    <div className="globalContainer">
      <div className="applicationRejectContainer">
        <div className="mobileTime">
          <MobileSignalTimeBar isWhite = {false}/>
        </div>
        <div className="rejectContainer">
            <img src = "/assets/reject.png" alt = "reject" className="rejectImg"/>
            <div className="rejectText">
                <h2 className="rejection">Application Rejected</h2>
            </div>
          </div>
          <div className="backToHome">
            <SplashButton text = "Back to Home" isWhite = {false} isSelect = {false} isProceed = {true} onClick = {backToHome}/>
          </div>
      </div>
    </div>
  );
}