import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Award, ExternalLink, Users, DollarSign, FileText, Search } from 'lucide-react';

const Schemes = () => {
  const [schemes, setSchemes] = useState([]);
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSchemes();
  }, []);

  useEffect(() => {
    filterSchemes();
  }, [schemes, searchTerm]);

  const fetchSchemes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/schemes');
      setSchemes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching schemes:', error);
      setLoading(false);
    }
  };

  const filterSchemes = () => {
    let filtered = schemes;

    if (searchTerm) {
      filtered = filtered.filter(scheme =>
        scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.eligibility.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredSchemes(filtered);
  };

  const getSchemeIcon = (name) => {
    if (name.toLowerCase().includes('scholarship') || name.toLowerCase().includes('education')) {
      return <Award className="h-6 w-6" />;
    } else if (name.toLowerCase().includes('loan') || name.toLowerCase().includes('mudra')) {
      return <DollarSign className="h-6 w-6" />;
    } else if (name.toLowerCase().includes('skill')) {
      return <Users className="h-6 w-6" />;
    } else {
      return <FileText className="h-6 w-6" />;
    }
  };

  const getSchemeColor = (name) => {
    if (name.toLowerCase().includes('scholarship') || name.toLowerCase().includes('education')) {
      return 'from-blue-500 to-blue-600';
    } else if (name.toLowerCase().includes('loan') || name.toLowerCase().includes('mudra')) {
      return 'from-green-500 to-green-600';
    } else if (name.toLowerCase().includes('skill')) {
      return 'from-purple-500 to-purple-600';
    } else {
      return 'from-orange-500 to-orange-600';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading government schemes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Government Schemes & Scholarships
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover financial support, scholarships, and government programs 
            available for rural students and entrepreneurs
          </p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search schemes by name, description, or eligibility..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredSchemes.length} of {schemes.length} schemes
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>Always verify scheme details and application deadlines on official government websites. 
                Requirements and benefits may change over time.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSchemes.map((scheme, index) => (
            <div
              key={scheme.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 card-hover"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${getSchemeColor(scheme.name)} p-6 text-white`}>
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-20 rounded-lg p-2 mr-4">
                    {getSchemeIcon(scheme.name)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{scheme.name}</h3>
                    <p className="text-blue-100 mt-1">{scheme.description}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Eligibility */}
                <div>
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="font-semibold text-gray-900">Eligibility</span>
                  </div>
                  <p className="text-gray-700 bg-gray-50 rounded-lg p-3">
                    {scheme.eligibility}
                  </p>
                </div>

                {/* Benefits */}
                <div>
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-semibold text-gray-900">Benefits</span>
                  </div>
                  <p className="text-gray-700 bg-green-50 rounded-lg p-3 font-medium text-green-800">
                    {scheme.benefits}
                  </p>
                </div>

                {/* Application Process */}
                <div>
                  <div className="flex items-center mb-2">
                    <FileText className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-900">How to Apply</span>
                  </div>
                  <p className="text-gray-700 bg-blue-50 rounded-lg p-3">
                    {scheme.applicationProcess}
                  </p>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={() => {
                      // In a real app, this would open the official website
                      alert(`For more details about ${scheme.name}, please visit the official government portal.`);
                    }}
                    className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center font-medium"
                  >
                    Visit Official Portal
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredSchemes.length === 0 && (
          <div className="text-center py-12">
            <Award className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No schemes found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Additional Resources */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-blue-700 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help with Applications?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our AI assistant can help you understand eligibility criteria, 
              application processes, and deadlines for various government schemes.
            </p>
            <button
              onClick={() => window.location.href = '/chatbot'}
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Ask AI Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schemes;