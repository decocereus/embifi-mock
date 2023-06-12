import React from "react";
import './SplashButton.css';

export default function SplashButton(props) {
    // onClick = onSubmit
    return (
        <button className="splashButton">
            <label className="text">{props.text}</label>
        </button>
    )
}