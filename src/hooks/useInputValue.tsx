import { useDeferredValue, useState } from "react";

const useInputValue = () => {
  const [value, setInputValue] = useState("");
  const deferredValue = useDeferredValue(value);
  return { value, deferredValue, setInputValue };
};

export default useInputValue;
