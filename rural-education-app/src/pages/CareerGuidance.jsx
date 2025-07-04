import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  BookOpen, 
  TrendingUp, 
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const CareerGuidance = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    education: '',
    interests: [],
    skills: [],
    location: '',
    goals: ''
  });
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendations, setRecommendations] = useState(null);

  const educationLevels = [
    '10th Pass',
    '12th Pass',
    'Diploma',
    'Graduate',
    'Post Graduate',
    'Other'
  ];

  const interestOptions = [
    'Technology & Computers',
    'Healthcare & Medicine',
    'Agriculture & Environment',
    'Arts & Creativity',
    'Business & Finance',
    'Education & Teaching',
    'Sports & Fitness',
    'Social Work'
  ];

  const skillOptions = [
    'Communication',
    'Problem Solving',
    'Leadership',
    'Technical Skills',
    'Creative Thinking',
    'Analytical Skills',
    'Teamwork',
    'Languages'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (category, value) => {
    setFormData(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const generateRecommendations = () => {
    // Simulate AI-powered recommendations based on form data
    const careerPaths = [];
    const courses = [];
    const nextSteps = [];

    // Basic logic for recommendations
    if (formData.interests.includes('Technology & Computers')) {
      careerPaths.push({
        title: 'Software Developer',
        description: 'Create applications and software solutions',
        skills: ['Programming', 'Problem Solving', 'Logical Thinking'],
        education: 'Computer Science Degree or Coding Bootcamp',
        salary: '₹3-8 LPA',
        growth: 'Excellent'
      });
      courses.push('Full Stack Web Development', 'Python Programming', 'Data Structures');
    }

    if (formData.interests.includes('Healthcare & Medicine')) {
      careerPaths.push({
        title: 'Nurse',
        description: 'Provide healthcare services and patient care',
        skills: ['Empathy', 'Communication', 'Medical Knowledge'],
        education: 'Nursing Diploma/Degree',
        salary: '₹2-5 LPA',
        growth: 'High Demand'
      });
      courses.push('Basic Nursing Course', 'First Aid Certification', 'Healthcare Management');
    }

    if (formData.interests.includes('Agriculture & Environment')) {
      careerPaths.push({
        title: 'Agricultural Scientist',
        description: 'Research and develop farming techniques',
        skills: ['Research', 'Scientific Thinking', 'Environmental Awareness'],
        education: 'B.Sc Agriculture',
        salary: '₹3-7 LPA',
        growth: 'Growing Field'
      });
      courses.push('Modern Farming Techniques', 'Organic Agriculture', 'Soil Science');
    }

    // Add default recommendations if none match
    if (careerPaths.length === 0) {
      careerPaths.push({
        title: 'Skill Development Programs',
        description: 'Build foundational skills for various careers',
        skills: ['Communication', 'Basic Computer Skills', 'Professional Skills'],
        education: 'Skill Development Courses',
        salary: '₹1.5-4 LPA',
        growth: 'Foundation for Growth'
      });
    }

    nextSteps.push(
      'Complete your current education level',
      'Enroll in relevant skill development courses',
      'Gain practical experience through internships',
      'Network with professionals in your field',
      'Keep learning and updating your skills'
    );

    setRecommendations({
      careerPaths,
      courses,
      nextSteps,
      governmentSchemes: [
        'Post Matric Scholarship',
        'Skill India Programs',
        'Startup India Initiative',
        'PM Kaushal Vikas Yojana'
      ]
    });
    setShowRecommendations(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateRecommendations();
  };

  if (showRecommendations && recommendations) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Personalized Career Guidance for {formData.name}
              </h1>
              <p className="text-gray-600">
                Based on your profile, here are our recommendations
              </p>
            </div>

            {/* Career Paths */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="h-6 w-6 mr-2 text-blue-600" />
                Recommended Career Paths
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendations.careerPaths.map((career, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{career.title}</h3>
                    <p className="text-gray-700 mb-4">{career.description}</p>
                    <div className="space-y-2 text-sm">
                      <div><strong>Skills needed:</strong> {career.skills.join(', ')}</div>
                      <div><strong>Education:</strong> {career.education}</div>
                      <div><strong>Salary Range:</strong> {career.salary}</div>
                      <div><strong>Growth:</strong> {career.growth}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recommended Courses */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-green-600" />
                Recommended Courses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recommendations.courses.map((course, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="font-medium text-gray-900">{course}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <ArrowRight className="h-6 w-6 mr-2 text-purple-600" />
                Your Action Plan
              </h2>
              <div className="space-y-3">
                {recommendations.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Government Schemes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Award className="h-6 w-6 mr-2 text-orange-600" />
                Relevant Government Schemes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendations.governmentSchemes.map((scheme, index) => (
                  <div key={index} className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-orange-600 mr-2" />
                      <span className="font-medium text-gray-900">{scheme}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => setShowRecommendations(false)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Update Profile
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Download Report
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Career Guidance Assessment
            </h1>
            <p className="text-gray-600">
              Tell us about yourself to get personalized career recommendations
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  min="15"
                  max="60"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your age"
                />
              </div>
            </div>

            {/* Education Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Education Level *
              </label>
              <select
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your education level</option>
                {educationLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location (District/State)
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Pune, Maharashtra"
              />
            </div>

            {/* Interests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Areas of Interest (Select all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {interestOptions.map((interest) => (
                  <label key={interest} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleCheckboxChange('interests', interest)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Your Strengths/Skills (Select all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {skillOptions.map((skill) => (
                  <label key={skill} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.skills.includes(skill)}
                      onChange={() => handleCheckboxChange('skills', skill)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{skill}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Career Goals */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Career Goals/Aspirations
              </label>
              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your career aspirations, what you want to achieve..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Personalized Career Guidance
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerGuidance;