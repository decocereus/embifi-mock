import React from "react";
import "./MobileSignalTimeBar.css";
import MobileSignal from "../../assets/MobileSignal.png";
import Wifi from "../../assets/Wifi.png";
import Rectangle from "../../assets/Rectangle.png";

export default function MobileSignalTimeBar() {
  return (
    <div className="container">
      <div className="right">
        <image className="symbol1" src={MobileSignal} alt="MobileSignal" />
        <image className="symbol2" src={Wifi} alt="Wifi" />
        <image className="symbol3" src={Rectangle} alt="Rectangle" />
      </div>
      <div className="left">
        <h3 className="time">9:41</h3>
      </div>
    </div>
  );
}
