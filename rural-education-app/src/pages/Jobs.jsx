import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Search, 
  MapPin, 
  DollarSign,
  Calendar,
  Building,
  Users,
  ExternalLink,
  Filter
} from 'lucide-react';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobs = [
    {
      id: 1,
      title: "Junior Software Developer",
      company: "Tech Solutions India",
      location: "Remote/Bangalore",
      salary: "₹3-5 LPA",
      type: "Full-time",
      category: "technology",
      experience: "0-2 years",
      description: "Develop web applications using modern technologies. Perfect for freshers.",
      requirements: ["Basic programming knowledge", "HTML/CSS/JavaScript", "Problem-solving skills"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Agriculture Extension Officer",
      company: "Ministry of Agriculture",
      location: "Various Rural Areas",
      salary: "₹25,000-35,000/month",
      type: "Government",
      category: "agriculture",
      experience: "0-3 years",
      description: "Provide agricultural guidance and support to farmers in rural areas.",
      requirements: ["B.Sc Agriculture", "Communication skills", "Field work experience"],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Digital Marketing Executive",
      company: "Rural Connect Solutions",
      location: "Pune/Remote",
      salary: "₹2.5-4 LPA",
      type: "Full-time",
      category: "marketing",
      experience: "1-3 years",
      description: "Manage digital marketing campaigns for rural businesses.",
      requirements: ["Digital marketing knowledge", "Social media expertise", "Creative thinking"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Staff Nurse",
      company: "Rural Health Mission",
      location: "Primary Health Centers",
      salary: "₹18,000-25,000/month",
      type: "Government",
      category: "healthcare",
      experience: "0-2 years",
      description: "Provide healthcare services in rural primary health centers.",
      requirements: ["GNM/B.Sc Nursing", "Registration certificate", "Compassionate care"],
      posted: "5 days ago"
    },
    {
      id: 5,
      title: "Data Entry Operator",
      company: "Government Digital Services",
      location: "District Offices",
      salary: "₹15,000-20,000/month",
      type: "Government",
      category: "administrative",
      experience: "0-1 years",
      description: "Enter and manage data for government digital initiatives.",
      requirements: ["Basic computer skills", "Typing speed 30+ WPM", "Attention to detail"],
      posted: "1 day ago"
    },
    {
      id: 6,
      title: "Primary School Teacher",
      company: "Sarva Shiksha Abhiyan",
      location: "Rural Schools",
      salary: "₹20,000-30,000/month",
      type: "Government",
      category: "education",
      experience: "0-5 years",
      description: "Teach primary school students in government schools.",
      requirements: ["B.Ed degree", "Teaching passion", "Local language proficiency"],
      posted: "1 week ago"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'technology', label: 'Technology' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'administrative', label: 'Administrative' }
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'remote', label: 'Remote' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'pune', label: 'Pune' },
    { value: 'rural', label: 'Rural Areas' }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || 
                           job.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case 'technology': return 'bg-blue-100 text-blue-800';
      case 'agriculture': return 'bg-green-100 text-green-800';
      case 'healthcare': return 'bg-red-100 text-red-800';
      case 'education': return 'bg-purple-100 text-purple-800';
      case 'marketing': return 'bg-orange-100 text-orange-800';
      case 'administrative': return 'bg-gray-100 text-gray-800';
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
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Briefcase className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Job Opportunities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find relevant job opportunities with competitive salaries. 
            From government positions to private sector roles suitable for rural candidates.
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
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {locations.map(location => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Jobs List */}
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Building className="h-4 w-4 mr-1" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(job.category)}`}>
                      {job.category}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2 text-green-500" />
                      <span className="font-medium">{job.salary}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-purple-500" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                      <span>{job.posted}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:ml-6 lg:flex-shrink-0">
                  <div className="flex flex-col lg:items-end space-y-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      job.type === 'Government' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {job.type}
                    </span>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                      <span>Apply Now</span>
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 text-lg">No jobs found matching your criteria.</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLocation('all');
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Job Search Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Job Search Tips for Rural Candidates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Skill Development</h3>
              <p className="text-green-100 text-sm">
                Focus on developing in-demand skills through online courses and certifications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Government Jobs</h3>
              <p className="text-green-100 text-sm">
                Regularly check for government job notifications and prepare for competitive exams.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <ExternalLink className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Remote Work</h3>
              <p className="text-green-100 text-sm">
                Explore remote work opportunities that don't require relocation to cities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Jobs;