import React, { useState } from "react";
import "./inputs.css";

export default function DropDown({ options, name, label, getInputValue }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [displayedOption, setDisplayedOption] = useState(
    options[0] && options[0].name
  );

  function toggle() {
    setShowDropDown(!showDropDown);
  }
  function changeDisplayedName(key, value) {
    setDisplayedOption(value);
    getInputValue(key, value);
  }
  return (
    <div className="custom-select">
      <label className="text-bold">{label}</label>
      <div className="custom-select-button text-field-partial" onClick={toggle}>
        <span className="custom-select-display-value">{displayedOption}</span>
      </div>
      <ul
        className="custom-select-options"
        style={showDropDown ? { display: "block" } : { display: "none" }}
      >
        {options.map((el, i) => {
          return (
            <li onClick={() => changeDisplayedName(name, el.name)} key={i}>
              {el.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
