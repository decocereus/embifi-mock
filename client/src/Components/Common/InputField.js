import React from "react";

export default function InputField(props) {
  return (
    <div className="inputFieldContainer">
      <label className={props.required ? "requiredInputFieldHeader" : "inputFieldHeader"}>{props.label}</label>
      <div className="labelContainer">
        <label className="inputFieldLabel">
          <input
            type={props.type}
            className="inputField"
            required={props.required}
            placeholder={props.placeholder}
            onChange = {props.onChange}
          />
        </label>
      </div>
    </div>
  );
}
