import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
const RadioContext = createContext();
const RadioGroup = ({ children, defaultValue, className = "", onChange }) => {
  const [valueChecked, setValueChecked] = useState(defaultValue || "");
  useEffect(() => {
    setValueChecked(defaultValue);
  }, [defaultValue]);
  const onCheckChange = (e) => {
    const value = e.target.value;
    setValueChecked(value);
    onChange?.(value);
  };
  const value = { valueChecked, setValueChecked, onCheckChange };
  return (
    <RadioContext.Provider value={value} className={`radio-group ${className}`}>
      {children}
    </RadioContext.Provider>
  );
};
const RadioItem = ({ value, children }) => {
  const { valueChecked, onCheckChange } = useContext(RadioContext);
  return (
    <div className="custom-control custom-radio">
      <input
        type="radio"
        id={value}
        name={value}
        value={value}
        checked={value === valueChecked}
        onChange={onCheckChange}
        className="custom-control-input"
      />
      <label className="custom-control-label" htmlFor={value}>
        {children}
      </label>
    </div>
  );
};
export default { Group: RadioGroup, Item: RadioItem };
