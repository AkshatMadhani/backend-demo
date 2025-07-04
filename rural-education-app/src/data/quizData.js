export const quizQuestions = [
  {
    id: 1,
    question: "What type of activities do you enjoy most?",
    options: [
      { text: "Working with computers and technology", category: "technology" },
      { text: "Helping and caring for people", category: "healthcare" },
      { text: "Creating art, writing, or designing", category: "creative" },
      { text: "Working with numbers and data", category: "finance" },
      { text: "Growing plants or working with animals", category: "agriculture" },
      { text: "Teaching or training others", category: "education" }
    ]
  },
  {
    id: 2,
    question: "In your free time, you prefer to:",
    options: [
      { text: "Read tech blogs or experiment with gadgets", category: "technology" },
      { text: "Volunteer at community health centers", category: "healthcare" },
      { text: "Paint, write stories, or make music", category: "creative" },
      { text: "Manage family budget or small savings", category: "finance" },
      { text: "Work in kitchen gardens or tend to animals", category: "agriculture" },
      { text: "Help younger siblings with homework", category: "education" }
    ]
  },
  {
    id: 3,
    question: "What kind of work environment appeals to you?",
    options: [
      { text: "Modern office with latest technology", category: "technology" },
      { text: "Hospitals, clinics, or community health centers", category: "healthcare" },
      { text: "Studios, galleries, or creative spaces", category: "creative" },
      { text: "Banks, financial institutions, or offices", category: "finance" },
      { text: "Farms, fields, or agricultural research centers", category: "agriculture" },
      { text: "Schools, colleges, or training centers", category: "education" }
    ]
  },
  {
    id: 4,
    question: "Which subjects did you enjoy most in school?",
    options: [
      { text: "Mathematics, Science, Computer Studies", category: "technology" },
      { text: "Biology, Chemistry, Health Science", category: "healthcare" },
      { text: "Art, Literature, Music, Drama", category: "creative" },
      { text: "Mathematics, Economics, Accounts", category: "finance" },
      { text: "Biology, Environmental Science, Geography", category: "agriculture" },
      { text: "All subjects - I like explaining things to others", category: "education" }
    ]
  },
  {
    id: 5,
    question: "What motivates you the most?",
    options: [
      { text: "Creating innovative solutions to problems", category: "technology" },
      { text: "Making a difference in people's health and lives", category: "healthcare" },
      { text: "Expressing yourself and inspiring others", category: "creative" },
      { text: "Financial stability and business growth", category: "finance" },
      { text: "Sustainable farming and food security", category: "agriculture" },
      { text: "Sharing knowledge and empowering others", category: "education" }
    ]
  },
  {
    id: 6,
    question: "Which skill would you like to develop further?",
    options: [
      { text: "Programming, app development, or digital skills", category: "technology" },
      { text: "Medical knowledge and patient care", category: "healthcare" },
      { text: "Artistic skills and creative thinking", category: "creative" },
      { text: "Financial planning and business management", category: "finance" },
      { text: "Modern farming techniques and research", category: "agriculture" },
      { text: "Communication and mentoring abilities", category: "education" }
    ]
  },
  {
    id: 7,
    question: "When working on a project, you prefer to:",
    options: [
      { text: "Use logical thinking and systematic approach", category: "technology" },
      { text: "Focus on helping and caring for others", category: "healthcare" },
      { text: "Think outside the box and be creative", category: "creative" },
      { text: "Plan carefully and manage resources well", category: "finance" },
      { text: "Work with natural processes and sustainability", category: "agriculture" },
      { text: "Collaborate and teach others along the way", category: "education" }
    ]
  },
  {
    id: 8,
    question: "What type of impact do you want to make?",
    options: [
      { text: "Develop technology that changes how people live", category: "technology" },
      { text: "Improve health and save lives in your community", category: "healthcare" },
      { text: "Create beautiful things that inspire people", category: "creative" },
      { text: "Help people and businesses achieve financial goals", category: "finance" },
      { text: "Ensure food security and environmental protection", category: "agriculture" },
      { text: "Educate and empower the next generation", category: "education" }
    ]
  }
];

export const careerRecommendations = {
  technology: {
    title: "Technology & IT",
    description: "You have a strong aptitude for technology and problem-solving. Your logical thinking and interest in innovation make you well-suited for the tech industry.",
    careers: [
      {
        name: "Software Developer",
        description: "Create applications, websites, and software solutions",
        education: "12th + Computer Science degree or coding bootcamp",
        salary: "₹3-8 LPA",
        growth: "High demand, excellent growth prospects"
      },
      {
        name: "Data Analyst",
        description: "Analyze data to help businesses make informed decisions",
        education: "12th + Statistics/Mathematics/Computer Science",
        salary: "₹2.5-6 LPA",
        growth: "Growing field with increasing demand"
      },
      {
        name: "Digital Marketing Specialist",
        description: "Promote businesses online using digital platforms",
        education: "12th + Digital Marketing certification",
        salary: "₹2-5 LPA",
        growth: "Excellent opportunities for freelancing"
      },
      {
        name: "Cybersecurity Analyst",
        description: "Protect organizations from digital threats",
        education: "12th + Cybersecurity certification/degree",
        salary: "₹4-10 LPA",
        growth: "Very high demand, secure career"
      }
    ],
    skills: ["Programming", "Problem-solving", "Logical thinking", "Continuous learning"],
    nextSteps: [
      "Take free coding courses on platforms like FreeCodeCamp",
      "Learn basic programming languages like Python or JavaScript",
      "Practice on coding platforms like HackerRank",
      "Consider BTech in Computer Science or IT diploma"
    ]
  },
  healthcare: {
    title: "Healthcare & Medicine",
    description: "Your compassion and desire to help others, combined with interest in health sciences, make you ideal for healthcare careers.",
    careers: [
      {
        name: "Nurse",
        description: "Provide direct patient care and support",
        education: "12th (Science) + Nursing diploma/degree",
        salary: "₹2-5 LPA",
        growth: "High demand, job security"
      },
      {
        name: "Pharmacist",
        description: "Dispense medications and provide health advice",
        education: "12th (Science) + B.Pharm degree",
        salary: "₹2.5-6 LPA",
        growth: "Stable career with entrepreneurship opportunities"
      },
      {
        name: "Medical Laboratory Technician",
        description: "Conduct tests to help diagnose diseases",
        education: "12th (Science) + Medical Lab Technology diploma",
        salary: "₹2-4 LPA",
        growth: "Growing demand in healthcare sector"
      },
      {
        name: "Community Health Worker",
        description: "Provide health education and basic care in communities",
        education: "12th + Health Worker certification",
        salary: "₹1.5-3 LPA",
        growth: "Important role in rural healthcare"
      }
    ],
    skills: ["Empathy", "Communication", "Attention to detail", "Stress management"],
    nextSteps: [
      "Focus on Biology and Chemistry in 12th",
      "Volunteer at local health centers",
      "Take first aid and basic healthcare courses",
      "Research NEET exam for medical college admission"
    ]
  },
  creative: {
    title: "Creative Arts & Media",
    description: "Your artistic talents and creative thinking can lead to fulfilling careers in various creative fields.",
    careers: [
      {
        name: "Graphic Designer",
        description: "Create visual content for digital and print media",
        education: "12th + Graphic Design course/degree",
        salary: "₹2-6 LPA",
        growth: "Growing demand in digital marketing"
      },
      {
        name: "Content Writer",
        description: "Write engaging content for websites, blogs, and marketing",
        education: "12th + English/Journalism degree",
        salary: "₹2-5 LPA",
        growth: "High demand for quality content creators"
      },
      {
        name: "Photographer/Videographer",
        description: "Capture moments and create visual stories",
        education: "12th + Photography course/practice",
        salary: "₹1.5-8 LPA",
        growth: "Great for freelancing and entrepreneurship"
      },
      {
        name: "Interior Designer",
        description: "Design functional and beautiful interior spaces",
        education: "12th + Interior Design diploma/degree",
        salary: "₹2.5-7 LPA",
        growth: "Growing market in urban and rural areas"
      }
    ],
    skills: ["Creativity", "Visual thinking", "Communication", "Technical software skills"],
    nextSteps: [
      "Build a portfolio of your creative work",
      "Learn design software like Photoshop, Canva",
      "Take online courses in your area of interest",
      "Participate in local art competitions and exhibitions"
    ]
  },
  finance: {
    title: "Finance & Business",
    description: "Your analytical skills and interest in numbers make you well-suited for finance and business careers.",
    careers: [
      {
        name: "Banking Officer",
        description: "Handle customer accounts and financial transactions",
        education: "12th + Commerce/Economics degree + Bank PO exam",
        salary: "₹3-7 LPA",
        growth: "Job security and career advancement"
      },
      {
        name: "Accountant",
        description: "Manage financial records and prepare tax returns",
        education: "12th + B.Com + CA/CS/CMA",
        salary: "₹2.5-8 LPA",
        growth: "Always in demand, good for practice"
      },
      {
        name: "Insurance Agent",
        description: "Help people secure their financial future",
        education: "12th + Insurance certification",
        salary: "₹2-10 LPA",
        growth: "Commission-based, unlimited earning potential"
      },
      {
        name: "Financial Advisor",
        description: "Guide individuals and businesses in financial planning",
        education: "12th + Finance degree + certifications",
        salary: "₹3-12 LPA",
        growth: "Growing awareness about financial planning"
      }
    ],
    skills: ["Numerical aptitude", "Analytical thinking", "Communication", "Attention to detail"],
    nextSteps: [
      "Focus on Mathematics and Accounts in 12th",
      "Learn basic accounting and finance concepts",
      "Consider B.Com or BBA degree",
      "Prepare for banking exams like IBPS"
    ]
  },
  agriculture: {
    title: "Agriculture & Environment",
    description: "Your connection with nature and interest in sustainable practices make you ideal for modern agriculture and environmental careers.",
    careers: [
      {
        name: "Agricultural Scientist",
        description: "Research and develop new farming techniques",
        education: "12th (Science) + B.Sc Agriculture",
        salary: "₹3-8 LPA",
        growth: "Critical for food security and sustainability"
      },
      {
        name: "Organic Farmer",
        description: "Grow crops using sustainable, chemical-free methods",
        education: "12th + Organic farming training",
        salary: "₹2-15 LPA",
        growth: "Growing market for organic products"
      },
      {
        name: "Food Processing Technician",
        description: "Process and package agricultural products",
        education: "12th + Food Technology diploma",
        salary: "₹2-5 LPA",
        growth: "Growing food processing industry"
      },
      {
        name: "Environmental Consultant",
        description: "Help organizations minimize environmental impact",
        education: "12th + Environmental Science degree",
        salary: "₹3-7 LPA",
        growth: "Increasing environmental awareness"
      }
    ],
    skills: ["Scientific thinking", "Sustainability awareness", "Problem-solving", "Research abilities"],
    nextSteps: [
      "Focus on Biology and Chemistry",
      "Learn about modern farming techniques",
      "Visit agricultural universities and research centers",
      "Consider B.Sc Agriculture or related degrees"
    ]
  },
  education: {
    title: "Education & Training",
    description: "Your passion for sharing knowledge and helping others learn makes you well-suited for education and training careers.",
    careers: [
      {
        name: "Teacher",
        description: "Educate and inspire students in schools",
        education: "12th + B.Ed degree in subject specialization",
        salary: "₹2.5-6 LPA",
        growth: "Job security, social respect, and impact"
      },
      {
        name: "Corporate Trainer",
        description: "Train employees in companies and organizations",
        education: "12th + Degree + Training certifications",
        salary: "₹3-8 LPA",
        growth: "Growing demand for skill development"
      },
      {
        name: "Educational Counselor",
        description: "Guide students in career and academic choices",
        education: "12th + Psychology/Education degree",
        salary: "₹2.5-7 LPA",
        growth: "Increasing awareness about career guidance"
      },
      {
        name: "Online Course Creator",
        description: "Create and sell educational content online",
        education: "12th + Expertise in any subject",
        salary: "₹1-20 LPA",
        growth: "Booming online education market"
      }
    ],
    skills: ["Communication", "Patience", "Subject expertise", "Adaptability"],
    nextSteps: [
      "Identify your strongest subjects",
      "Practice teaching or tutoring others",
      "Consider B.Ed or subject-specific degrees",
      "Learn about modern teaching methods and technology"
    ]
  }
};

export const governmentSchemes = [
  {
    category: "education",
    schemes: [
      "Post Matric Scholarship for SC/ST/OBC",
      "Merit cum Means Scholarship",
      "National Scholarship Portal schemes",
      "Pragati Scholarship for Girls"
    ]
  },
  {
    category: "technology",
    schemes: [
      "Digital India initiatives",
      "Skill India Digital Literacy",
      "PM Kaushal Vikas Yojana for IT skills",
      "Startup India schemes"
    ]
  },
  {
    category: "agriculture",
    schemes: [
      "Pradhan Mantri Kisan Samman Nidhi",
      "Agricultural Education schemes",
      "Krishi Vigyan Kendra programs",
      "National Agriculture Education Project"
    ]
  }
];