import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Chatbot from './pages/Chatbot'
import CareerGuidance from './pages/CareerGuidance'
import GovtSchemes from './pages/GovtSchemes'
import Quiz from './pages/Quiz'
import './App.css'

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/chatbot">Chatbot</Link>
      <Link to="/career-guidance">Career Guidance</Link>
      <Link to="/schemes">Govt Schemes</Link>
      <Link to="/quiz">Quiz</Link>
    </nav>
  )
}

export default function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/career-guidance" element={<CareerGuidance />} />
          <Route path="/schemes" element={<GovtSchemes />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  )
}
