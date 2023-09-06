import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { styled } from "styled-components";

const InputNumberStyle = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;
const QuantityInput = ({
  min = 1,
  max = 999999999,
  step = 1,
  value,
  onChange,
}) => {
  const [renderValue, setRenderValue] = useState(value || 1);
  useEffect(() => {
    const myTimeout = setTimeout(() => {
      if (value !== renderValue) {
        setRenderValue(value);
      }
    }, 300);
    return () => clearTimeout(myTimeout);
  }, [value, value != renderValue]);
  // value is prop products and renderValue is parameter onChange be change products
  // and then value change
  const onInputChange = (e) => {
    setRenderValue(e.target.value);
    onChange?.(e.target.value);
  };
  const onInputBlur = (e) => {
    const value = modifyValue(e.target.value);
    setRenderValue(value);
    onChange?.(value);
  };
  const onDecrease = () => {
    const value = modifyValue(Number(renderValue) - Number(step));
    setRenderValue(value);
    onChange?.(value);
  };
  const onIncrease = () => {
    const value = modifyValue(Number(renderValue) + Number(step));
    setRenderValue(value);
    onChange?.(value);
  };
  const modifyValue = (value) => {
    if (value > max) {
      return max;
    } else if (value < min) {
      return min;
    }
    return value;
  };
  return (
    <div className="input-group  input-spinner">
      <div className="input-group-prepend">
        <button
          style={{ minWidth: 26 }}
          className="btn btn-decrement btn-spinner"
          type="button"
          onClick={onDecrease}
          disabled={renderValue <= min}
        >
          <i className="icon-minus" />
        </button>
      </div>
      <InputNumberStyle
        type="number"
        style={{ textAlign: "center" }}
        className="form-control "
        onChange={onInputChange}
        onBlur={onInputBlur}
        value={renderValue}
        max={max}
      />
      <div className="input-group-append">
        <button
          style={{ minWidth: 26 }}
          className="btn btn-increment btn-spinner"
          type="button"
          onClick={onIncrease}
          disabled={renderValue >= max}
        >
          <i className="icon-plus" />
        </button>
      </div>
    </div>
  );
};

export default QuantityInput;
