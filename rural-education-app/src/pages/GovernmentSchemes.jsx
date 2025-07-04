import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Search, 
  Filter, 
  ExternalLink,
  Calendar,
  DollarSign,
  Users,
  FileText,
  CheckCircle,
  GraduationCap
} from 'lucide-react';

const GovernmentSchemes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedState, setSelectedState] = useState('all');

  const schemes = [
    {
      id: 1,
      name: "Post Matric Scholarship for SC Students",
      category: "education",
      description: "Financial assistance for SC students pursuing higher education",
      eligibility: ["SC Category", "Annual family income below ₹2.5 lakhs", "Studying in recognized institutions"],
      benefits: ["Tuition fee reimbursement", "Maintenance allowance", "Study material allowance"],
      amount: "₹10,000 - ₹50,000 per year",
      deadline: "31st October 2024",
      applicationLink: "https://scholarships.gov.in",
      ministry: "Ministry of Social Justice & Empowerment",
      state: "all"
    },
    {
      id: 2,
      name: "Pragati Scholarship for Girls",
      category: "education",
      description: "Scholarship for girl students pursuing technical education",
      eligibility: ["Female students", "Pursuing AICTE approved courses", "Annual family income below ₹8 lakhs"],
      benefits: ["₹30,000 per year", "No bond or service commitment"],
      amount: "₹30,000 per year",
      deadline: "30th November 2024",
      applicationLink: "https://scholarships.gov.in",
      ministry: "Ministry of Education",
      state: "all"
    },
    {
      id: 3,
      name: "PM Kisan Samman Nidhi",
      category: "agriculture",
      description: "Direct income support to small and marginal farmers",
      eligibility: ["Small and marginal farmers", "Landholding up to 2 hectares", "Valid land records"],
      benefits: ["₹6,000 per year in 3 installments", "Direct bank transfer"],
      amount: "₹6,000 per year",
      deadline: "Ongoing",
      applicationLink: "https://pmkisan.gov.in",
      ministry: "Ministry of Agriculture",
      state: "all"
    },
    {
      id: 4,
      name: "Skill India Digital Literacy",
      category: "skill",
      description: "Digital literacy training for rural population",
      eligibility: ["Age 14-60 years", "Rural background", "Basic education"],
      benefits: ["Free digital literacy training", "Certificate on completion", "Job placement assistance"],
      amount: "Free training worth ₹5,000",
      deadline: "Ongoing enrollment",
      applicationLink: "https://www.skillindia.gov.in",
      ministry: "Ministry of Skill Development",
      state: "all"
    },
    {
      id: 5,
      name: "Startup India Scheme",
      category: "entrepreneurship",
      description: "Support for startups and entrepreneurs",
      eligibility: ["Innovative business idea", "Age 18+ years", "Indian citizen"],
      benefits: ["Tax exemptions", "Funding support", "Mentorship programs", "Simplified compliance"],
      amount: "Up to ₹10 lakhs funding",
      deadline: "Ongoing",
      applicationLink: "https://startupindia.gov.in",
      ministry: "Department of Industrial Policy & Promotion",
      state: "all"
    },
    {
      id: 6,
      name: "Stand Up India",
      category: "entrepreneurship",
      description: "Bank loans for SC/ST and women entrepreneurs",
      eligibility: ["SC/ST or Women", "Age 18+ years", "First-time entrepreneur"],
      benefits: ["Loan between ₹10 lakh to ₹1 crore", "Handholding support"],
      amount: "₹10 lakh - ₹1 crore",
      deadline: "Ongoing",
      applicationLink: "https://standupmitra.in",
      ministry: "Ministry of Finance",
      state: "all"
    },
    {
      id: 7,
      name: "National Rural Livelihood Mission",
      category: "skill",
      description: "Skill development and employment for rural poor",
      eligibility: ["Rural BPL families", "Age 15-35 years", "Willing to migrate for employment"],
      benefits: ["Free skill training", "Placement assistance", "Financial support during training"],
      amount: "Training cost + stipend",
      deadline: "Ongoing",
      applicationLink: "https://aajeevika.gov.in",
      ministry: "Ministry of Rural Development",
      state: "all"
    },
    {
      id: 8,
      name: "Mukhyamantri Kanya Utthan Yojana",
      category: "education",
      description: "Financial assistance for girl child education (Bihar)",
      eligibility: ["Girl students from Bihar", "Studying in government schools", "Annual family income criteria"],
      benefits: ["₹10,000 for intermediate pass", "₹25,000 for graduation"],
      amount: "₹10,000 - ₹25,000",
      deadline: "31st December 2024",
      applicationLink: "https://medhasoft.bih.nic.in",
      ministry: "Government of Bihar",
      state: "bihar"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'education', label: 'Education' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'skill', label: 'Skill Development' },
    { value: 'entrepreneurship', label: 'Entrepreneurship' }
  ];

  const states = [
    { value: 'all', label: 'All India' },
    { value: 'bihar', label: 'Bihar' },
    { value: 'uttar pradesh', label: 'Uttar Pradesh' },
    { value: 'maharashtra', label: 'Maharashtra' }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
    const matchesState = selectedState === 'all' || scheme.state === selectedState || scheme.state === 'all';
    
    return matchesSearch && matchesCategory && matchesState;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'education': return <GraduationCap className="h-5 w-5" />;
      case 'agriculture': return <Award className="h-5 w-5" />;
      case 'skill': return <Users className="h-5 w-5" />;
      case 'entrepreneurship': return <DollarSign className="h-5 w-5" />;
      default: return <Award className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'education': return 'bg-blue-100 text-blue-800';
      case 'agriculture': return 'bg-green-100 text-green-800';
      case 'skill': return 'bg-purple-100 text-purple-800';
      case 'entrepreneurship': return 'bg-orange-100 text-orange-800';
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
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="h-10 w-10 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Government Schemes & Scholarships
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover government schemes, scholarships, and financial assistance programs 
            designed specifically for rural students and communities.
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
                placeholder="Search schemes..."
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

            {/* State Filter */}
            <div>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {states.map(state => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme, index) => (
            <motion.div
              key={scheme.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Scheme Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center ${getCategoryColor(scheme.category)}`}>
                    {getCategoryIcon(scheme.category)}
                    <span className="ml-1 capitalize">{scheme.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">{scheme.amount}</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{scheme.name}</h3>
                <p className="text-gray-600 text-sm">{scheme.description}</p>
              </div>

              {/* Scheme Details */}
              <div className="p-6 space-y-4">
                {/* Eligibility */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                    Eligibility
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {scheme.eligibility.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <Award className="h-4 w-4 mr-1 text-blue-500" />
                    Benefits
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {scheme.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deadline and Ministry */}
                <div className="grid grid-cols-1 gap-2 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-red-500" />
                    <span className="font-medium">Deadline:</span>
                    <span className="ml-1">{scheme.deadline}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="font-medium">Ministry:</span>
                    <span className="ml-1 truncate">{scheme.ministry}</span>
                  </div>
                </div>

                {/* Apply Button */}
                <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <span>Apply Online</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredSchemes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 text-lg">No schemes found matching your criteria.</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedState('all');
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Need Help with Applications?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our AI chatbot can help you understand eligibility criteria, application processes, 
            and answer any questions about government schemes.
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Chat with AI Assistant
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default GovernmentSchemes;