import React, { useState } from 'react';

export default function UseMemoPage() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = slowFunction(number);
  return (
    <>
      <h1>Use Memo Page</h1>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
      <div
        style={{
          backgroundColor: dark ? 'black' : 'white',
          color: dark ? 'white' : 'black',
          padding: '2rem',
        }}
      >
        {doubleNumber}
      </div>
    </>
  );
}

function slowFunction(num: number) {
  console.log('Calling slow function');
  for (let i = 0; i < 10 ** 9; i++) {}
  return num * 2;
}
