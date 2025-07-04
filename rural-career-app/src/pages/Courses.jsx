import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BookOpen, Search, Clock, Award, ExternalLink, Filter } from 'lucide-react';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCost, setSelectedCost] = useState('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize with sample courses
    const sampleCourses = [
      {
        id: 1,
        title: "Digital Marketing Fundamentals",
        platform: "Google Digital Garage",
        duration: "40 hours",
        certification: "Yes",
        cost: "Free",
        category: "Business",
        description: "Learn the basics of digital marketing including SEO, social media, and analytics.",
        skills: ["SEO", "Social Media", "Analytics"],
        level: "Beginner"
      },
      {
        id: 2,
        title: "Introduction to Programming",
        platform: "freeCodeCamp",
        duration: "300 hours",
        certification: "Yes",
        cost: "Free",
        category: "Technology",
        description: "Complete web development course covering HTML, CSS, JavaScript, and more.",
        skills: ["HTML", "CSS", "JavaScript"],
        level: "Beginner"
      },
      {
        id: 3,
        title: "Agricultural Technology",
        platform: "SWAYAM",
        duration: "12 weeks",
        certification: "Yes",
        cost: "Free",
        category: "Agriculture",
        description: "Modern farming techniques and agricultural technology applications.",
        skills: ["Farming", "Technology", "Sustainability"],
        level: "Intermediate"
      },
      {
        id: 4,
        title: "Financial Literacy",
        platform: "Khan Academy",
        duration: "20 hours",
        certification: "No",
        cost: "Free",
        category: "Finance",
        description: "Learn about personal finance, banking, and investment basics.",
        skills: ["Banking", "Investment", "Budgeting"],
        level: "Beginner"
      },
      {
        id: 5,
        title: "Data Science Basics",
        platform: "Coursera",
        duration: "4 weeks",
        certification: "Yes",
        cost: "₹1,999",
        category: "Technology",
        description: "Introduction to data analysis, statistics, and visualization.",
        skills: ["Python", "Statistics", "Data Analysis"],
        level: "Intermediate"
      },
      {
        id: 6,
        title: "English Communication",
        platform: "BYJU'S",
        duration: "6 weeks",
        certification: "Yes",
        cost: "₹999",
        category: "Language",
        description: "Improve your English speaking and writing skills for career advancement.",
        skills: ["Speaking", "Writing", "Grammar"],
        level: "Beginner"
      },
      {
        id: 7,
        title: "Small Business Management",
        platform: "Skill India",
        duration: "8 weeks",
        certification: "Yes",
        cost: "Free",
        category: "Business",
        description: "Learn how to start and manage a small business in rural areas.",
        skills: ["Management", "Finance", "Marketing"],
        level: "Intermediate"
      },
      {
        id: 8,
        title: "Basic Computer Skills",
        platform: "Microsoft Learn",
        duration: "15 hours",
        certification: "Yes",
        cost: "Free",
        category: "Technology",
        description: "Essential computer skills for the modern workplace.",
        skills: ["MS Office", "Internet", "Email"],
        level: "Beginner"
      }
    ];

    setCourses(sampleCourses);
    setFilteredCourses(sampleCourses);
  }, []);

  useEffect(() => {
    filterCourses();
  }, [courses, searchTerm, selectedCategory, selectedCost]);

  const filterCourses = () => {
    let filtered = courses;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(course =>
        course.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by cost
    if (selectedCost !== 'all') {
      if (selectedCost === 'free') {
        filtered = filtered.filter(course => course.cost === 'Free');
      } else if (selectedCost === 'paid') {
        filtered = filtered.filter(course => course.cost !== 'Free');
      }
    }

    setFilteredCourses(filtered);
  };

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'technology', label: 'Technology' },
    { value: 'business', label: 'Business' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'language', label: 'Language' },
    { value: 'finance', label: 'Finance' },
  ];

  const costOptions = [
    { value: 'all', label: 'All Courses' },
    { value: 'free', label: 'Free Only' },
    { value: 'paid', label: 'Paid Courses' },
  ];

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCostColor = (cost) => {
    return cost === 'Free' ? 'text-green-600 font-bold' : 'text-blue-600 font-semibold';
  };

  const handleFindCourses = async () => {
    setLoading(true);
    try {
      // This would call your backend API in a real application
      const response = await axios.post('http://localhost:5000/api/courses', {
        interest: searchTerm,
        education: 'any'
      });
      // For now, we'll just show the sample courses
      setLoading(false);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <BookOpen className="h-12 w-12 text-primary-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Free & Affordable Courses
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enhance your skills with quality courses from trusted platforms. 
            Build your expertise and advance your career.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses, skills, or platforms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Cost Filter */}
            <div>
              <select
                value={selectedCost}
                onChange={(e) => setSelectedCost(e.target.value)}
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {costOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 card-hover"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-500 to-blue-600 p-4 text-white">
                <h3 className="text-lg font-bold mb-1">{course.title}</h3>
                <p className="text-blue-100 text-sm">{course.platform}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Course Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <span className={`text-sm ${getCostColor(course.cost)}`}>
                      {course.cost}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 mr-1" />
                      {course.certification === 'Yes' ? 'Certificate' : 'No Certificate'}
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-900 block mb-2">Skills you'll learn:</span>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => {
                    alert(`Redirecting to ${course.platform} for ${course.title}`);
                  }}
                  className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center text-sm font-medium"
                >
                  Enroll Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No courses found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedCost('all');
              }}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Our AI assistant can recommend personalized courses based on your career goals and interests.
            </p>
            <button
              onClick={() => window.location.href = '/chatbot'}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Personal Recommendations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;