import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MessageCircle, 
  BookOpen, 
  Award, 
  Users, 
  TrendingUp,
  ArrowRight 
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'Career Quiz',
      description: 'Discover your ideal career path through our intelligent quiz system',
      link: '/quiz',
      color: 'bg-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'AI Career Guide',
      description: 'Chat with our AI assistant for personalized career advice',
      link: '/chatbot',
      color: 'bg-green-500'
    },
    {
      icon: BookOpen,
      title: 'Free Courses',
      description: 'Access quality educational resources and skill development courses',
      link: '/courses',
      color: 'bg-purple-500'
    },
    {
      icon: Award,
      title: 'Government Schemes',
      description: 'Learn about scholarships and financial support programs',
      link: '/schemes',
      color: 'bg-orange-500'
    },
    {
      icon: Users,
      title: 'Career Exploration',
      description: 'Explore different career options with detailed information',
      link: '/careers',
      color: 'bg-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Understand career growth potential and salary expectations',
      link: '/careers',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Rural Youth
              <br />
              <span className="text-yellow-300">Through Education</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Discover your potential, explore career opportunities, and access 
              government schemes designed for rural development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quiz"
                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center"
              >
                Take Career Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/chatbot"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Ask AI Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Career Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From career discovery to skill development, we provide comprehensive 
              support for rural students and professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover border border-gray-100"
              >
                <div className={`${feature.color} rounded-lg p-3 w-fit mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Career Options</div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Government Schemes</div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">Free Courses</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Shape Your Future?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Start your journey today with our career guidance tools and resources
          </p>
          <Link
            to="/quiz"
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 inline-flex items-center"
          >
            Begin Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;