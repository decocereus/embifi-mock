import React from "react";
import "./MobileSignalTimeBar.css";

export default function MobileSignalTimeBar(props) {
  const color = props.isWhite ? "whiteTimebar" : "defaultTimebar"
  return (
    <div className="container">
      <div className="right">
        <img className = {color + " symbol1"} src="/assets/MobileSignal.png" alt = "MobileSignal"/>
        <img className = {color + " symbol2"} src="/assets/Wifi.png" alt = "Wifi"/>
        <img className = {color + " symbol3"} src="/assets/Rectangle.png" alt = "Rectangle"/>
      </div>
      <div className="left">
        <h3 className={color + " time"}>9:41</h3>
      </div>
    </div>
  );
}
