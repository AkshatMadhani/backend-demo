import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Search, 
  Filter, 
  ExternalLink,
  Clock,
  Users,
  Star,
  Award,
  Play,
  Download
} from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const courses = [
    {
      id: 1,
      title: "Introduction to Programming with Python",
      category: "technology",
      level: "beginner",
      platform: "Coursera",
      provider: "University of Michigan",
      duration: "8 weeks",
      students: "150K+",
      rating: 4.8,
      price: "Free",
      certificate: true,
      description: "Learn programming fundamentals using Python. Perfect for beginners with no prior experience.",
      skills: ["Python", "Programming Logic", "Problem Solving"],
      image: "/api/placeholder/300/200",
      link: "https://coursera.org/learn/python"
    },
    {
      id: 2,
      title: "Digital Marketing Fundamentals",
      category: "business",
      level: "beginner",
      platform: "Google Digital Garage",
      provider: "Google",
      duration: "40 hours",
      students: "500K+",
      rating: 4.7,
      price: "Free",
      certificate: true,
      description: "Master the basics of digital marketing including SEO, social media, and analytics.",
      skills: ["SEO", "Social Media Marketing", "Google Analytics"],
      image: "/api/placeholder/300/200",
      link: "https://learndigital.withgoogle.com"
    },
    {
      id: 3,
      title: "Organic Farming Techniques",
      category: "agriculture",
      level: "intermediate",
      platform: "SWAYAM",
      provider: "ICAR",
      duration: "12 weeks",
      students: "25K+",
      rating: 4.6,
      price: "Free",
      certificate: true,
      description: "Learn sustainable farming practices and organic crop production methods.",
      skills: ["Organic Farming", "Soil Management", "Crop Protection"],
      image: "/api/placeholder/300/200",
      link: "https://swayam.gov.in"
    },
    {
      id: 4,
      title: "Financial Literacy for Rural Communities",
      category: "finance",
      level: "beginner",
      platform: "NPTEL",
      provider: "IIT Bombay",
      duration: "8 weeks",
      students: "30K+",
      rating: 4.5,
      price: "Free",
      certificate: true,
      description: "Understand banking, investments, and financial planning for rural development.",
      skills: ["Banking", "Investment Planning", "Financial Management"],
      image: "/api/placeholder/300/200",
      link: "https://nptel.ac.in"
    },
    {
      id: 5,
      title: "Basic Computer Skills",
      category: "technology",
      level: "beginner",
      platform: "Khan Academy",
      provider: "Khan Academy",
      duration: "6 weeks",
      students: "100K+",
      rating: 4.4,
      price: "Free",
      certificate: false,
      description: "Learn essential computer skills including MS Office, internet usage, and email.",
      skills: ["MS Office", "Internet Skills", "Email"],
      image: "/api/placeholder/300/200",
      link: "https://khanacademy.org"
    },
    {
      id: 6,
      title: "English Communication Skills",
      category: "language",
      level: "beginner",
      platform: "Coursera",
      provider: "University of Pennsylvania",
      duration: "10 weeks",
      students: "80K+",
      rating: 4.6,
      price: "Free Audit",
      certificate: true,
      description: "Improve your English speaking and writing skills for better career opportunities.",
      skills: ["Speaking", "Writing", "Grammar"],
      image: "/api/placeholder/300/200",
      link: "https://coursera.org/learn/english"
    },
    {
      id: 7,
      title: "Entrepreneurship and Small Business",
      category: "business",
      level: "intermediate",
      platform: "edX",
      provider: "MIT",
      duration: "6 weeks",
      students: "45K+",
      rating: 4.7,
      price: "Free Audit",
      certificate: true,
      description: "Learn how to start and manage a small business in rural areas.",
      skills: ["Business Planning", "Marketing", "Financial Management"],
      image: "/api/placeholder/300/200",
      link: "https://edx.org/course/entrepreneurship"
    },
    {
      id: 8,
      title: "Web Development Basics",
      category: "technology",
      level: "beginner",
      platform: "FreeCodeCamp",
      provider: "FreeCodeCamp",
      duration: "300 hours",
      students: "2M+",
      rating: 4.8,
      price: "Free",
      certificate: true,
      description: "Complete web development course covering HTML, CSS, and JavaScript.",
      skills: ["HTML", "CSS", "JavaScript"],
      image: "/api/placeholder/300/200",
      link: "https://freecodecamp.org"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'technology', label: 'Technology' },
    { value: 'business', label: 'Business' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'finance', label: 'Finance' },
    { value: 'language', label: 'Language' }
  ];

  const levels = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case 'technology': return 'bg-blue-100 text-blue-800';
      case 'business': return 'bg-green-100 text-green-800';
      case 'agriculture': return 'bg-yellow-100 text-yellow-800';
      case 'finance': return 'bg-purple-100 text-purple-800';
      case 'language': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-orange-100 text-orange-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free & Affordable Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access quality education with our curated collection of free and affordable courses 
            from top platforms and universities worldwide.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {levels.map(level => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Course Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-16 w-16 text-white opacity-80" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(course.category)}`}>
                    {course.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{course.description}</p>
                  
                  {/* Platform & Provider */}
                  <div className="text-sm text-blue-600 font-medium">
                    {course.platform} • {course.provider}
                  </div>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    {course.rating}
                  </div>
                  <div className="flex items-center">
                    {course.certificate ? (
                      <span className="flex items-center text-green-600">
                        <Award className="h-4 w-4 mr-1" />
                        Certificate
                      </span>
                    ) : (
                      <span className="text-gray-500">No certificate</span>
                    )}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills you'll gain:</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-lg font-bold text-green-600">{course.price}</span>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm">
                    <span>Start Learning</span>
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 text-lg">No courses found matching your criteria.</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Featured Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Trusted Learning Platforms
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Coursera', 'edX', 'Khan Academy', 'SWAYAM', 'NPTEL', 'FreeCodeCamp'].map((platform, index) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-2"></div>
                <div className="text-sm font-medium text-gray-900">{platform}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;