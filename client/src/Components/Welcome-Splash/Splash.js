import React from "react";
import "./Splash.css";
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
            <img className="embifiLogo" src="/assets/Vector.png" alt="Vector" />
          </div>
        </div>
      </div>
    </>
  );
}
