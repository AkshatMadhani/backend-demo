import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Users, 
  MessageCircle, 
  Award, 
  BookOpen, 
  Briefcase,
  ArrowRight,
  Star,
  TrendingUp
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: 'Career Quiz',
      description: 'Discover your ideal career path through our intelligent assessment quiz.',
      path: '/quiz',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Career Guidance',
      description: 'Get personalized career advice from AI-powered counselors.',
      path: '/career-guidance',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Free Courses',
      description: 'Access quality education with curated course recommendations.',
      path: '/courses',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Briefcase,
      title: 'Job Opportunities',
      description: 'Find relevant job openings and salary information.',
      path: '/jobs',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Award,
      title: 'Government Schemes',
      description: 'Explore scholarships and government programs for rural students.',
      path: '/schemes',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbot',
      description: 'Get instant answers to your career and education questions.',
      path: '/chatbot',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Students Helped' },
    { number: '500+', label: 'Career Paths' },
    { number: '1000+', label: 'Courses Available' },
    { number: '50+', label: 'Govt Schemes' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Rural Education & Careers
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover your potential, explore career paths, and access quality education 
              designed specifically for rural communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quiz"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Take Career Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/chatbot"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Chat with AI
                <MessageCircle className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Your Career Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and resources you need 
              to make informed career decisions and succeed in your chosen field.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={feature.path}>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-gray-100">
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of rural students who have found their dream careers with our platform.
            </p>
            <Link
              to="/quiz"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Star className="mr-2 h-5 w-5" />
              Start Your Career Assessment
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;