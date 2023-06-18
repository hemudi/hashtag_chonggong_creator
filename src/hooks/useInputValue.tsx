import { useDeferredValue, useState } from "react";

const useInputValue = <T = "string",>(defaultValue: T) => {
  const [value, setInputValue] = useState<T>(defaultValue);
  const deferredValue = useDeferredValue(value);
  return { value, deferredValue, setInputValue };
};

export default useInputValue;
