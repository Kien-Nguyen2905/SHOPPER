import React from "react";

const CheckboxFilter = ({ id, label, onChange, className, ...props }) => {
  return (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id={id}
        onChange={onChange}
        {...props}
      />
      <label className="custom-control-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default CheckboxFilter;
