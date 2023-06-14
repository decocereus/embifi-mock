import React from "react";
import './SplashButton.css';

export default function SplashButton(props) {
    const className = props.isSelect ? "select" : props.isProceed ? "proceed" : "submit"
    const backgroundColor = props.isWhite ? "white" : "default"
    return (
        <button className={className + " splashButton " + backgroundColor} onClick={props.onClick}>
            <label className= {"text " + backgroundColor}>{props.text}</label>
        </button>
    )
}