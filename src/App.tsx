import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router';
import UseMemoPage from './pages/UseMemoPage';
import Header from './components/Header';
import UseOptimisticPage from './pages/UseOptimisticPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/use-optimistic" element={<UseOptimisticPage />} />
        <Route path="/use-memo" element={<UseMemoPage />} />
      </Routes>
    </>
  );
}

export default App;
