import React from "react";
import "./MobileSignalTimeBar.css";

export default function MobileSignalTimeBar() {
  return (
    <div className="container">
      <div className="right">
        <img className = "symbol1" src="/assets/MobileSignal.png" alt = "MobileSignal"/>
        <img className = "symbol2" src="/assets/Wifi.png" alt = "Wifi"/>
        <img className = "symbol3" src="/assets/Rectangle.png" alt = "Rectangle"/>
      </div>
      <div className="left">
        <h3 className="time">9:41</h3>
      </div>
    </div>
  );
}
