import React from "react";

export default function InputField(props) {
  return (
    <div className="inputFieldContainer">
      <label className="inputFieldHeader">{props.label}</label>
      <div className="labelContainer">
        <label className="inputFieldLabel">
          <input
            type={props.type}
            className="inputField"
            required={props.required}
            placeholder={props.placeholder}
          />
        </label>
      </div>
    </div>
  );
}
