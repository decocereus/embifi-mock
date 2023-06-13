import React from "react";
import './SplashButton.css';

export default function SplashButton(props) {
    // onClick = onSubmit
    const className = props.isSelect ? "select" : props.isProceed ? "proceed" : "submit"
    return (
        <button className={className + " splashButton"}>
            <label className="text">{props.text}</label>
        </button>
    )
}