import React, { useState, useEffect } from "react";
import Splash from "./Splash";
import "./Welcome.css";
import SplashButton from "../Common/SplashButton";
import MobileSignalTimeBar from "../Common/MobileSignalTimeBar";

import group from "../../assets/group.png";
import checkmark from "../../assets/checkmark.png";
import hand from "../../assets/hand.png";
import document from "../../assets/document.png";

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
                <img className="groupPicture" src={group} alt="group" />
                <h1 className="tagline">Get a Loan in just 2 minutes</h1>
              </div>
              <div className="perksContainer">
                <div className="headingImgContainer">
                  <image
                    className="checkmark1"
                    src="../../assets/checkmark.png"
                    alt="checkmark"
                  />
                  <h2 className="heading1"> Minimal documentation </h2>
                  <image className="document" src={document} alt="document" />
                </div>
                <div className="headingImgContainer">
                  <image
                    className="checkmark2"
                    src={checkmark}
                    alt="checkmark"
                  />
                  <h2 className="heading2"> Zero prepayment charges </h2>
                  <image className="hand" src={hand} alt="hand" />
                </div>
              </div>
              <SplashButton text="Register for loan" />
            </div>
          </div>
        </>
      ) : (
        <Splash />
      )}
    </>
  );
}
