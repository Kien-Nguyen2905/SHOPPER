import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [value, setVallue] = useState(initialValue);
  const handleToggle = () => {
    setVallue(!value);
  };
  return {
    value,
    handleToggle,
  };
};
