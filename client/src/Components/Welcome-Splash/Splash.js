import React from "react";
import "./Splash.css";
import Vector from "../../assets/Vector.png";
import MobileSignalTimeBar from "../Common/MobileSignalTimeBar";

export default function Splash() {
  return (
    <>
      <div className="globalContainer">
        <div className="splashContainer">
          <MobileSignalTimeBar/>
          <div className="logoTextContainer">
            <h4 className="heading">Powered by</h4>
            <image className="embifiLogo" src={Vector} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
