import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainNavigationPage from './pages/MainNavigationPage';
import ExercisePage from './pages/ExercisePage';
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainNavigationPage />} />
        <Route path="/Exercise" element={<ExercisePage />} />
      </Routes>
    </Router>
  );
}

export default App;