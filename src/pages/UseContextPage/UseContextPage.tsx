import React, { useState } from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import ClassContextComponent from './ClassContextComponent';
import ThemeContextProvider, { useThemeContext } from './ThemeContextProvider';

export default function UseContextPage() {
  // const [darkTheme, setDarkTheme] = useState(true);
  // function toggleTheme() {
  //   setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  // }

  // console.log(darkTheme);
  return (
    <>
      <ThemeContextProvider>
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        <FunctionContextComponent />
        {/* <ClassContextComponent /> */}
      </ThemeContextProvider>
    </>
  );
}
