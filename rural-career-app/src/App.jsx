import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Careers from './pages/Careers';
import Chatbot from './pages/Chatbot';
import Schemes from './pages/Schemes';
import Courses from './pages/Courses';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
