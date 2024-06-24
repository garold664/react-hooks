import React, { useContext, useState } from 'react';

export const ThemeContext = React.createContext({
  darkTheme: true,
  toggleTheme: () => {},
});

export function useThemeContext() {
  return useContext(ThemeContext);
}
export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
