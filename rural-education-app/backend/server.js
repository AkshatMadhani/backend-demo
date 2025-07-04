const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mock data for demonstration
const mockCourses = [
  {
    id: 1,
    title: "Python Programming for Beginners",
    platform: "FreeCodeCamp",
    category: "technology",
    level: "beginner",
    price: "Free",
    rating: 4.8
  }
];

const mockJobs = [
  {
    id: 1,
    title: "Junior Software Developer",
    company: "Tech Solutions",
    location: "Remote",
    salary: "₹3-5 LPA",
    category: "technology"
  }
];

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// Career guidance endpoint (to integrate with Python Flask)
app.post('/api/career-guidance', async (req, res) => {
  try {
    const { age, education_level, subjects, career_goal, rural_background } = req.body;
    
    // Mock response - in production, this would call the Python Flask API
    const mockResponse = {
      career_guidance: `Based on your profile (Age: ${age}, Education: ${education_level}), 
      we recommend exploring technology careers. Consider courses in programming, 
      digital marketing, and computer applications. Government schemes like 
      Skill India and Digital Literacy programs would be beneficial.`
    };
    
    // TODO: Replace with actual call to Python Flask API
    // const response = await axios.post('http://localhost:5001/career-guidance', req.body);
    
    res.json(mockResponse);
  } catch (error) {
    res.status(500).json({ error: 'Career guidance service temporarily unavailable' });
  }
});

// Course recommendations endpoint
app.get('/api/courses', (req, res) => {
  const { category, level, search } = req.query;
  let filteredCourses = mockCourses;
  
  if (category && category !== 'all') {
    filteredCourses = filteredCourses.filter(course => course.category === category);
  }
  
  if (level && level !== 'all') {
    filteredCourses = filteredCourses.filter(course => course.level === level);
  }
  
  if (search) {
    filteredCourses = filteredCourses.filter(course => 
      course.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  res.json({ courses: filteredCourses });
});

// Job listings endpoint
app.get('/api/jobs', (req, res) => {
  const { category, location, search } = req.query;
  let filteredJobs = mockJobs;
  
  if (category && category !== 'all') {
    filteredJobs = filteredJobs.filter(job => job.category === category);
  }
  
  if (location && location !== 'all') {
    filteredJobs = filteredJobs.filter(job => 
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  }
  
  if (search) {
    filteredJobs = filteredJobs.filter(job => 
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  res.json({ jobs: filteredJobs });
});

// Government schemes endpoint
app.get('/api/schemes', (req, res) => {
  const mockSchemes = [
    {
      id: 1,
      name: "Post Matric Scholarship for SC Students",
      category: "education",
      amount: "₹10,000 - ₹50,000 per year",
      deadline: "31st October 2024",
      eligibility: ["SC Category", "Annual family income below ₹2.5 lakhs"]
    }
  ];
  
  res.json({ schemes: mockSchemes });
});

// Chatbot endpoint (to integrate with Python AI)
app.post('/api/chatbot', async (req, res) => {
  try {
    const { message } = req.body;
    
    // Mock chatbot response - in production, integrate with Python AI
    const responses = {
      career: "I can help you explore various career options! What specific field interests you?",
      courses: "There are many free courses available. What subject would you like to learn?",
      schemes: "Government schemes provide great support for rural students. What type of assistance do you need?",
      default: "I'm here to help with career guidance, courses, and government schemes. What would you like to know?"
    };
    
    let response = responses.default;
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('career')) response = responses.career;
    else if (lowerMessage.includes('course')) response = responses.courses;
    else if (lowerMessage.includes('scheme') || lowerMessage.includes('scholarship')) response = responses.schemes;
    
    // TODO: Replace with actual AI service call
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Chatbot service temporarily unavailable' });
  }
});

// Quiz results endpoint
app.post('/api/quiz/results', (req, res) => {
  const { answers } = req.body;
  
  // Simple logic to determine top category
  const categoryCount = {};
  Object.values(answers).forEach(answer => {
    const category = answer.category;
    categoryCount[category] = (categoryCount[category] || 0) + 1;
  });
  
  const topCategory = Object.keys(categoryCount).reduce((a, b) => 
    categoryCount[a] > categoryCount[b] ? a : b
  );
  
  const recommendations = {
    technology: {
      title: "Technology & IT",
      description: "You show strong aptitude for technology and innovation.",
      careers: ["Software Developer", "Data Analyst", "Digital Marketing"]
    },
    healthcare: {
      title: "Healthcare & Medicine", 
      description: "Your caring nature makes you ideal for healthcare careers.",
      careers: ["Nurse", "Pharmacist", "Medical Lab Technician"]
    }
    // Add more categories as needed
  };
  
  res.json({
    topCategory,
    recommendation: recommendations[topCategory] || recommendations.technology
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Rural Education Backend Server running on port ${PORT}`);
  console.log(`📱 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔗 Ready to integrate with React frontend on http://localhost:5173`);
});

module.exports = app;