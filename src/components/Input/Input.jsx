import React from "react";
import { useController } from "react-hook-form";
import { rules } from "../../constants/rules";

const Input = ({
  label,
  name,
  required,
  className = "",
  control,
  renderProp,
  ...props
}) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    control,
    name,
    rules: props.rules || rules[name],
    defaultValue: "",
  });
  return (
    <>
      {renderProp ? (
        renderProp(props, invalid, field)
      ) : (
        <>
          <label htmlFor={name} className={className}>
            {label}
          </label>
          {required && <span>*</span>}
          <input
            className={`form-control ${invalid ? "input-error" : ""}`}
            {...field}
            {...props}
          />
        </>
      )}
      {invalid && <p className="form-error">{error?.message}</p>}
    </>
  );
};

export default Input;
