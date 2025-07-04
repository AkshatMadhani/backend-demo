const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data for careers, quiz questions, and government schemes
const careers = [
  {
    id: 1,
    title: "Software Developer",
    description: "Design and build software applications",
    education: "Bachelor's in Computer Science or related field",
    skills: ["Programming", "Problem Solving", "Communication"],
    salary: "₹3-15 LPA",
    growth: "Excellent",
    suitableFor: ["technology", "logical-thinking", "problem-solving"]
  },
  {
    id: 2,
    title: "Agricultural Scientist",
    description: "Research and develop improved farming techniques",
    education: "Bachelor's in Agriculture Science",
    skills: ["Research", "Biology", "Data Analysis"],
    salary: "₹2-8 LPA",
    growth: "Good",
    suitableFor: ["agriculture", "science", "research"]
  },
  {
    id: 3,
    title: "Teacher",
    description: "Educate and mentor students",
    education: "Bachelor's degree + B.Ed",
    skills: ["Communication", "Patience", "Subject Knowledge"],
    salary: "₹2-6 LPA",
    growth: "Stable",
    suitableFor: ["education", "communication", "helping-others"]
  },
  {
    id: 4,
    title: "Healthcare Worker",
    description: "Provide medical care and support",
    education: "Medical degree or certification",
    skills: ["Empathy", "Medical Knowledge", "Communication"],
    salary: "₹3-20 LPA",
    growth: "Excellent",
    suitableFor: ["healthcare", "helping-others", "science"]
  },
  {
    id: 5,
    title: "Business Owner",
    description: "Start and manage your own business",
    education: "Any degree + Business skills",
    skills: ["Leadership", "Risk Management", "Marketing"],
    salary: "Variable",
    growth: "High Risk/High Reward",
    suitableFor: ["business", "leadership", "risk-taking"]
  }
];

const quizQuestions = [
  {
    id: 1,
    question: "What type of work environment do you prefer?",
    options: [
      { text: "Office with computers", value: "technology" },
      { text: "Outdoors in nature", value: "agriculture" },
      { text: "Classroom or teaching spaces", value: "education" },
      { text: "Hospital or clinic", value: "healthcare" }
    ]
  },
  {
    id: 2,
    question: "Which activity interests you most?",
    options: [
      { text: "Solving puzzles and coding", value: "technology" },
      { text: "Growing plants and farming", value: "agriculture" },
      { text: "Explaining concepts to others", value: "education" },
      { text: "Helping sick people", value: "healthcare" }
    ]
  },
  {
    id: 3,
    question: "What motivates you the most?",
    options: [
      { text: "Creating innovative solutions", value: "technology" },
      { text: "Contributing to food security", value: "agriculture" },
      { text: "Shaping young minds", value: "education" },
      { text: "Saving lives", value: "healthcare" }
    ]
  },
  {
    id: 4,
    question: "How do you prefer to solve problems?",
    options: [
      { text: "Using logic and algorithms", value: "logical-thinking" },
      { text: "Through research and experimentation", value: "research" },
      { text: "By discussing with others", value: "communication" },
      { text: "Taking calculated risks", value: "risk-taking" }
    ]
  },
  {
    id: 5,
    question: "What's your ideal impact on society?",
    options: [
      { text: "Advancing technology", value: "technology" },
      { text: "Improving agriculture", value: "agriculture" },
      { text: "Educating people", value: "education" },
      { text: "Improving health", value: "healthcare" }
    ]
  }
];

const governmentSchemes = [
  {
    id: 1,
    name: "PM-KISAN",
    description: "Direct income support to farmers",
    eligibility: "Small and marginal farmers",
    benefits: "₹6000 per year",
    applicationProcess: "Online at pmkisan.gov.in"
  },
  {
    id: 2,
    name: "National Scholarship Portal",
    description: "Scholarships for students from various categories",
    eligibility: "Students from SC/ST/OBC/Minority communities",
    benefits: "Variable based on course and category",
    applicationProcess: "Online at scholarships.gov.in"
  },
  {
    id: 3,
    name: "Skill India",
    description: "Skill development programs",
    eligibility: "Youth aged 15-45",
    benefits: "Free skill training + certification",
    applicationProcess: "Visit nearest skill center or online"
  },
  {
    id: 4,
    name: "Mudra Loan",
    description: "Micro-finance for small businesses",
    eligibility: "Micro and small enterprises",
    benefits: "Loans up to ₹10 lakhs",
    applicationProcess: "Through banks and financial institutions"
  }
];

// Routes

// Get all careers
app.get('/api/careers', (req, res) => {
  res.json(careers);
});

// Get quiz questions
app.get('/api/quiz', (req, res) => {
  res.json(quizQuestions);
});

// Submit quiz and get career recommendations
app.post('/api/quiz/submit', (req, res) => {
  const { answers } = req.body;
  
  // Calculate preferences based on answers
  const preferences = {};
  answers.forEach(answer => {
    preferences[answer] = (preferences[answer] || 0) + 1;
  });
  
  // Find matching careers
  const recommendedCareers = careers.filter(career => 
    career.suitableFor.some(skill => preferences[skill] > 0)
  ).sort((a, b) => {
    const aScore = a.suitableFor.reduce((sum, skill) => sum + (preferences[skill] || 0), 0);
    const bScore = b.suitableFor.reduce((sum, skill) => sum + (preferences[skill] || 0), 0);
    return bScore - aScore;
  });
  
  res.json({
    preferences,
    recommendedCareers: recommendedCareers.slice(0, 3)
  });
});

// Get government schemes
app.get('/api/schemes', (req, res) => {
  res.json(governmentSchemes);
});

// Chatbot endpoint
app.post('/api/chatbot', (req, res) => {
  const { message } = req.body;
  
  // Simple chatbot responses (in a real app, you'd integrate with your Python agents)
  let response = "I'm here to help you with career guidance! ";
  
  if (message.toLowerCase().includes('career')) {
    response += "I can help you explore different career options. Have you taken our career quiz yet?";
  } else if (message.toLowerCase().includes('education')) {
    response += "Education is key to career success. What level of education are you currently at?";
  } else if (message.toLowerCase().includes('scheme') || message.toLowerCase().includes('government')) {
    response += "There are many government schemes available for rural students. Check out our Government Schemes section!";
  } else if (message.toLowerCase().includes('job')) {
    response += "Jobs are available in many fields. What type of work interests you most?";
  } else {
    response += "I can help you with career guidance, education advice, government schemes, and job opportunities. What would you like to know?";
  }
  
  res.json({ response });
});

// Course recommendations
app.post('/api/courses', (req, res) => {
  const { interest, education } = req.body;
  
  // Sample course recommendations
  const courses = [
    {
      title: "Digital Marketing Fundamentals",
      platform: "Google Digital Garage",
      duration: "40 hours",
      certification: "Yes",
      cost: "Free"
    },
    {
      title: "Introduction to Programming",
      platform: "freeCodeCamp",
      duration: "300 hours",
      certification: "Yes",
      cost: "Free"
    },
    {
      title: "Agricultural Technology",
      platform: "SWAYAM",
      duration: "12 weeks",
      certification: "Yes",
      cost: "Free"
    }
  ];
  
  res.json(courses);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});