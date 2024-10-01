import { useDebugValue, useEffect, useState } from 'react';

function getSavedValue(key: string, initialValue: any) {
  const savedValue = localStorage.getItem(key);

  if (savedValue) return JSON.parse(savedValue);

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

export default function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useDebugValue(key);
  useDebugValue(value, () => slowFunction(value));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}

function slowFunction(value: any) {
  for (let i = 0; i < 3 * 10 ** 9; i++) {}
  return value;
}
