import { useState, useEffect } from 'react';

function useDebounce(value: string, delay: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timerId);
    // eslint-disable-next-line
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
