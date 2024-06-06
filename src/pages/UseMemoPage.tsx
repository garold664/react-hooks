import React, { useEffect, useMemo, useRef, useState } from 'react';

export default function UseMemoPage() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // const [themeChangeCounter, setThemeChangeCounter] = useState(0);
  const themeChangeCounter = useRef(0);
  //# 1 reason to use useMemo
  // slowFunction(number);
  // if use slowFunction without useMemo the change of theme happens as slow as the change of number.
  // but with useMemo the change of theme happens fast because it shouldn't change the number.
  // use useMemo only if you have really slow calculations that you need to memoize.
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  //# 2 reason to use useMemo
  //% referential equality
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
    padding: '2rem',
  };

  useEffect(() => {
    // setThemeChangeCounter((prev) => prev + 1); // this would cause infinite loop
    themeChangeCounter.current += 1;
    console.log('changing theme');
  }, [themeStyles]);

  return (
    <>
      <h1>Use Memo Page</h1>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
      <div
        style={{
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        Theme Change Counter:{' '}
        <span style={{ fontWeight: 'bold', color: 'red', fontSize: '3rem' }}>
          {themeChangeCounter.current}
        </span>
      </div>
    </>
  );
}

function slowFunction(num: number) {
  console.log('Calling slow function');
  for (let i = 0; i < 10 ** 9; i++) {}
  return num * 2;
}
