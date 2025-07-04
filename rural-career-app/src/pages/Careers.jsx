import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Briefcase, TrendingUp, GraduationCap, DollarSign } from 'lucide-react';

const Careers = () => {
  const [careers, setCareers] = useState([]);
  const [filteredCareers, setFilteredCareers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCareers();
  }, []);

  useEffect(() => {
    filterCareers();
  }, [careers, searchTerm, selectedCategory]);

  const fetchCareers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/careers');
      setCareers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching careers:', error);
      setLoading(false);
    }
  };

  const filterCareers = () => {
    let filtered = careers;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(career =>
        career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        career.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(career =>
        career.suitableFor.includes(selectedCategory)
      );
    }

    setFilteredCareers(filtered);
  };

  const categories = [
    { value: 'all', label: 'All Careers' },
    { value: 'technology', label: 'Technology' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'education', label: 'Education' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'business', label: 'Business' },
  ];

  const getGrowthColor = (growth) => {
    switch (growth.toLowerCase()) {
      case 'excellent':
        return 'text-green-600 bg-green-100';
      case 'good':
        return 'text-blue-600 bg-blue-100';
      case 'stable':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-purple-600 bg-purple-100';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading career information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Briefcase className="h-12 w-12 text-primary-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Explore Career Options
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover detailed information about various career paths, including education requirements, 
            salary expectations, and growth potential
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search careers, skills, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
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
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCareers.length} of {careers.length} careers
          </p>
        </div>

        {/* Career Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCareers.map((career) => (
            <div
              key={career.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 card-hover"
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {career.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {career.description}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Education */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="h-5 w-5 text-primary-600 mr-2" />
                    <span className="font-semibold text-gray-900">Education</span>
                  </div>
                  <p className="text-gray-700 text-sm">{career.education}</p>
                </div>

                {/* Salary */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-semibold text-gray-900">Salary Range</span>
                  </div>
                  <p className="text-gray-700 text-sm">{career.salary}</p>
                </div>
              </div>

              {/* Growth & Skills */}
              <div className="space-y-3">
                {/* Growth */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="font-semibold text-gray-900">Growth Potential:</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGrowthColor(career.growth)}`}>
                    {career.growth}
                  </span>
                </div>

                {/* Skills */}
                <div>
                  <span className="font-semibold text-gray-900 mb-2 block">Key Skills:</span>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Suitable For Tags */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500 mb-2 block">Suitable for:</span>
                <div className="flex flex-wrap gap-1">
                  {career.suitableFor.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      {tag.replace('-', ' ')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCareers.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No careers found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or category filter
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;