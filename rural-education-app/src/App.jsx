import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CareerQuiz from './pages/CareerQuiz';
import CareerGuidance from './pages/CareerGuidance';
import GovernmentSchemes from './pages/GovernmentSchemes';
import Chatbot from './pages/Chatbot';
import Courses from './pages/Courses';
import Jobs from './pages/Jobs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<CareerQuiz />} />
          <Route path="/career-guidance" element={<CareerGuidance />} />
          <Route path="/schemes" element={<GovernmentSchemes />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
