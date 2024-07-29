import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, timeout: number) => {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, timeout);
    return () => clearTimeout(timer);
  }, [value, timeout]);

  return debounceValue;
};
