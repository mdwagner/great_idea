import React from 'react';
import { Router, Routes, Route } from './components/Router';
import { Login } from './pages/Login';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}
