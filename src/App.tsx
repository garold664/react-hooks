import './App.css';
import { Route, Routes } from 'react-router';
import UseMemoPage from './pages/UseMemoPage';
import Header from './components/Header';
import UseRefPage from './pages/UseRefPage';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/use-memo" element={<UseMemoPage />} />
        <Route path="/use-ref" element={<UseRefPage />} />
      </Routes>
    </>
  );
}

export default App;
