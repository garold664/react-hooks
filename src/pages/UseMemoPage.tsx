import React, { useMemo, useState } from 'react';

export default function UseMemoPage() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  //# 1 reason to use useMemo
  // slowFunction(number);
  // if use slowFunction without useMemo the change of theme happens as slow as the change of number.
  // but with useMemo the change of theme happens fast because it shouldn't change the number.
  // use useMemo only if you have really slow calculations that you need to memoize.
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

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
