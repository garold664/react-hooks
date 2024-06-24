import { useThemeContext } from './ThemeContextProvider';

export default function FunctionContextComponent() {
  const { darkTheme, toggleTheme } = useThemeContext();
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      Function theme{' '}
      <b style={{ fontSize: '2rem' }}>{darkTheme ? 'dark' : 'light'}</b>
    </div>
  );
}
