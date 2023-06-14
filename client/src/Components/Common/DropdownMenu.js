import React, { useState } from "react";
import "./InputField.css";

export default function DropdownMenu(props) {
  const [selectedOption, setSelectedOption] = useState("None");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const arrowDirection = isOpen ? "up" : "down";

  return (
    <div className="dropdown">
      <label className="dropdownLabel">{props.label}</label>
      <div className="dropdownMenuContainer">
        <button className="dropdownToggle" onClick={toggleMenu}>
            <img className={"dropdownArrow " + arrowDirection} src = "/assets/dropdown.png" alt = 'dropdown' onClick={toggleMenu}/>
          {selectedOption === "None" ?  "Select an option" : selectedOption}
        </button>
        {isOpen && (
          <ul className="dropdownMenu">
            {props.options.map((option) => (
              <li
                className="dropdownMenuItems"
                key={option}
                onClick={() => selectOption(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
