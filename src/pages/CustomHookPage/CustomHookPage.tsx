import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

export default function CustomHookPage() {
  const [name, setName] = useLocalStorage('name', '');
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
