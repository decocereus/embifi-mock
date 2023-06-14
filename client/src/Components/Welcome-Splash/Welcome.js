import React, { useState, useEffect } from "react";
import Splash from "./Splash";
import "./Welcome.css";
import SplashButton from "../Common/SplashButton";
import MobileSignalTimeBar from "../Common/MobileSignalTimeBar";

export default function Welcome() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);


  return (
    <>
      {loading === false ? (
        <>
          <div className="globalContainer">
            <div className="welcomeContainer">
              <MobileSignalTimeBar />
              <div className="tagLineImgContainer">
                <img className="groupPicture" src="/assets/group.png" alt="group" />
                <h1 className="tagline">Get a Loan in just 2 minutes</h1>
              </div>
              <div className="perksContainer">
                <div className="headingImgContainer">
                  <img
                    className="checkmark1"
                    src="/assets/checkmark.png"
                    alt="checkmark"
                  />
                  <h2 className="heading1"> Minimal documentation </h2>
                  <img className="document" src="/assets/document.png" alt="document" />
                </div>
                <div className="headingImgContainer">
                  <img
                    className="checkmark2"
                    src="/assets/checkmark.png"
                    alt="checkmark"
                  />
                  <h2 className="heading2"> Zero prepayment charges </h2>
                  <img className="hand" src="/assets/hand.png" alt="hand" />
                </div>
              </div>
              <div className="welcomeBtn">
                <SplashButton text="Register for loan" isSelect = {false} isProceed = {false}/>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Splash />
      )}
    </>
  );
}
