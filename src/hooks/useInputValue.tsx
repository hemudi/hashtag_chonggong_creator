import { useDeferredValue, useState } from "react";

const useInputValue = <T = "string",>() => {
  const [value, setInputValue] = useState<T>();
  const deferredValue = useDeferredValue(value);
  return { value, deferredValue, setInputValue };
};

export default useInputValue;
