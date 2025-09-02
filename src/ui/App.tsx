import { HashRouter, Route, Routes } from 'react-router-dom';
import { StrictMode } from 'react';
import { Home } from './Views/Home';

export function App() {
  return (
    <StrictMode>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </HashRouter>
    </StrictMode>
  );
}
