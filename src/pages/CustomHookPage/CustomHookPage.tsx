import { useState } from 'react';

export default function CustomHookPage() {
  const [name, setName] = useState('');
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
