import { HashRouter, Route, Routes } from 'react-router-dom';
import { StrictMode } from 'react';
import { HomePage } from './pages/HomePage';

export function App() {
  return (
    <StrictMode>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </HashRouter>
    </StrictMode>
  );
}
