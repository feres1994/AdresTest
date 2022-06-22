import React from "react";

export default function Input({
  label,
  name,
  value,
  placeholder,
  getInputValue,
}) {
  //expect the text input will be used in all the app but in dfferent way
  //prepare it as partial then make it custom, we can enhance it later
  return (
    <div className="custom-select">
      <label className="text-bold">{label}</label>
      <div>
        <input
          name={name}
          type="text"
          value={value}
          placeholder={placeholder}
          className="text-field-partial"
          onChange={(e) => getInputValue(e.target.name, e.target.value)}
        />
      </div>
    </div>
  );
}
