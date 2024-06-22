import './App.css';
import { Route, Routes } from 'react-router';
import UseMemoPage from './pages/UseMemoPage';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/use-memo" element={<UseMemoPage />} />
      </Routes>
    </>
  );
}

export default App;
