import React from 'react';
import { Router, Routes, Route } from './components/Router';

import { Login } from './pages/Login';
import { Welcome } from './pages/Welcome';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}
