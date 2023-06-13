import React from "react";
import "./Splash.css";
import Vector from "../../assets/Vector.png";
import MobileSignalTimeBar from "../Common/MobileSignalTimeBar";

export default function Splash() {
  return (
    <>
      <div className="globalContainer">
        <div className="splashContainer">
        <div className="mobileTimeSplash">
            <MobileSignalTimeBar />
          </div>
          <div className="logoTextContainer">
            <h4 className="embifiHeading">Powered by</h4>
            <image className="embifiLogo" src={Vector} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
