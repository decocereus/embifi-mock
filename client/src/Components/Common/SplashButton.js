import React from "react";
import './SplashButton.css';

export default function SplashButton(props) {
    // onClick = onSubmit
    const className = props.isSelect ? "select" : props.isProceed ? "proceed" : "submit"
    console.log(props.onClick)
    return (
        <button className={className + " splashButton"} onClick={props.onClick}>
            <label className="text">{props.text}</label>
        </button>
    )
}