import React from "react";
import { useController } from "react-hook-form";
import { rules } from "../../constants/rules";

const Checkbox = ({ label, name, children, control, ...props }) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    control,
    name,
    rules: rules[name],
    defaultValue: false,
  });
  return (
    <label>
      <input
        type="checkbox"
        checked={field?.value}
        className="custom-control-input"
        {...props}
        {...field}
      />
      <div className="custom-control-label" htmlFor={name}>
        {label}
        {children}
      </div>
      {invalid && <p className="form-error">{error?.message}</p>}
    </label>
  );
};

export default Checkbox;
