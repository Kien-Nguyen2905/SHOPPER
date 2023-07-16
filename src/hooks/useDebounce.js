import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const useDebounce = (value, delay) => {
  const [debounce, setDebounce] = useState(value);
  const timeOut = useRef();
  useEffect(() => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    timeOut.current = setTimeout(() => {
      setDebounce(value);
    }, delay);
    return () => {
      clearTimeout(timeOut.current);
    };
  }, [value]);
  return debounce;
};

export default useDebounce;
