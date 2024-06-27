import { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';

export default function CustomHookPage() {
  const [name, setName] = useLocalStorage('name', '');
  useUpdateLogger(name);
  return (
    <>
      <h1>CustomHookPage</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}
