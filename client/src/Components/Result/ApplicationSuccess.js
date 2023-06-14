import React from "react";
import MobileSignalTimeBar from "../Common/MobileSignalTimeBar";
import SplashButton from "../Common/SplashButton";
import "./ApplicationSuccess.css";

export default function ApplicationSuccess() {
  return (
    <div className="globalContainer">
      <div className="applicationSuccessContainer">
        <div className="mobileTimeSuccess">
          <MobileSignalTimeBar isWhite = {true}/>
        </div>
        <div className="backButtonHome">
          <button className="backBtnHome">
            <img src="/assets/arrow_back.png" alt="arrow_back" />
          </button>
        </div>
        <div className="congratulationsContainer">
            <img src = "/assets/success.png" alt = "success" className="congrats"/>
            <div className="congratsText">
                <h2 className="Congratualtions">Congratualtions!</h2>
                <h2 className="approved">Application Approved</h2>
            </div>
          </div>
          <div className="backToHome">
            <SplashButton text = "Back to Home" isWhite = {true} isSelect = {false} isProceed = {true} />
          </div>
      </div>
    </div>
  );
}