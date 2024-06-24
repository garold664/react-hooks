import React, { useContext } from 'react';
import { ThemeContext } from './UseContextPage';

export default function FunctionContextComponent() {
  const darkTheme = useContext(ThemeContext);
  return (
    <div>
      Function theme{' '}
      <b style={{ fontSize: '2rem' }}>{darkTheme ? 'dark' : 'light'}</b>
    </div>
  );
}
