import './App.css';
import { Route, Routes } from 'react-router';
import UseMemoPage from './pages/UseMemoPage';
import Header from './components/Header';
import UseRefPage from './pages/UseRefPage';
import UseContextPage from './pages/UseContextPage/UseContextPage';
import ClassBasedComponent from './pages/ClassBasedComponent/ClassBasedComponent';
import UseRef2Page from './pages/UseRef2Page/UseRef2Page';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/use-memo" element={<UseMemoPage />} />
        <Route path="/use-ref" element={<UseRefPage />} />
        <Route path="/use-ref2" element={<UseRef2Page />} />
        <Route path="/use-context" element={<UseContextPage />} />
        <Route
          path="/class-based-component"
          element={<ClassBasedComponent value={10} />}
        />
      </Routes>
    </>
  );
}

export default App;
