import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Bot, 
  User, 
  MessageCircle, 
  Lightbulb,
  BookOpen,
  Briefcase,
  Award,
  HelpCircle
} from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI career guidance assistant. I'm here to help you with career planning, education options, and government schemes. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickSuggestions = [
    { text: "What career should I choose?", icon: Briefcase },
    { text: "Tell me about government scholarships", icon: Award },
    { text: "I want to learn programming", icon: BookOpen },
    { text: "How to start a small business?", icon: Lightbulb },
    { text: "What are the best courses for rural students?", icon: HelpCircle }
  ];

  const botResponses = {
    // Career guidance responses
    'career': "I'd be happy to help you explore career options! Based on your interests and skills, I can suggest several paths:\n\n🔹 **Technology**: Software development, data analysis, digital marketing\n🔹 **Healthcare**: Nursing, pharmacy, medical lab technology\n🔹 **Agriculture**: Modern farming, food processing, agricultural research\n🔹 **Education**: Teaching, corporate training, online course creation\n🔹 **Finance**: Banking, accounting, financial planning\n🔹 **Creative**: Graphic design, content writing, photography\n\nWould you like me to tell you more about any specific field?",
    
    'programming': "Great choice! Programming is in high demand and offers excellent career prospects. Here's how you can start:\n\n📚 **Free Learning Resources:**\n• FreeCodeCamp - Complete web development\n• Codecademy - Interactive coding lessons\n• YouTube channels like Programming with Mosh\n• Khan Academy - Computer programming basics\n\n💻 **Languages to start with:**\n• Python - Great for beginners, used in data science\n• JavaScript - Essential for web development\n• Java - Popular in enterprise applications\n\n🎯 **Next Steps:**\n1. Choose one language and stick with it\n2. Build small projects\n3. Join coding communities\n4. Consider pursuing a Computer Science degree or diploma",
    
    'scholarship': "There are many government scholarships available for rural students! Here are some key ones:\n\n🏛️ **Major Government Schemes:**\n• **Post Matric Scholarship** - For SC/ST/OBC students\n• **Merit cum Means Scholarship** - For economically weaker sections\n• **Pragati Scholarship** - For girls in technical education\n• **NSP (National Scholarship Portal)** - One-stop platform\n\n💰 **Financial Support:**\n• Tuition fee support\n• Maintenance allowance\n• Study materials allowance\n\n📋 **How to Apply:**\n1. Visit scholarships.gov.in\n2. Create account and fill application\n3. Upload required documents\n4. Submit before deadline\n\nWould you like specific information about eligibility criteria?",
    
    'business': "Starting a small business in rural areas has great potential! Here are some ideas:\n\n🌱 **Agriculture-based:**\n• Organic farming and products\n• Dairy and poultry farming\n• Food processing units\n• Agricultural equipment rental\n\n💻 **Service-based:**\n• Digital services (typing, data entry)\n• Online tutoring\n• E-commerce for local products\n• Mobile repair services\n\n🏪 **Retail & Manufacturing:**\n• General store with online presence\n• Handicrafts and textiles\n• Solar panel installation\n• Water purification systems\n\n💡 **Government Support:**\n• MUDRA loans for micro enterprises\n• Stand-up India scheme\n• Rural entrepreneurship programs\n• Skill development initiatives\n\nWhat type of business interests you most?",
    
    'courses': "Here are the best courses for rural students with good career prospects:\n\n💻 **Technology Courses:**\n• Computer Applications (BCA/MCA)\n• Data Entry and Digital Literacy\n• Digital Marketing\n• Basic Programming\n\n🏥 **Healthcare Courses:**\n• Nursing (ANM/GNM)\n• Pharmacy Assistant\n• Medical Lab Technology\n• Community Health Worker\n\n🌾 **Agriculture Courses:**\n• B.Sc Agriculture\n• Organic Farming Certification\n• Food Processing Technology\n• Agricultural Equipment Operation\n\n📚 **Skill Development:**\n• English Communication\n• Financial Literacy\n• Entrepreneurship Development\n• Solar Technician Training\n\n🎓 **Distance Learning Options:**\n• IGNOU courses\n• SWAYAM online courses\n• State Open Universities\n• Skill India Digital courses\n\nWhich field interests you most?",
    
    'default': "I understand you're looking for guidance! I can help you with:\n\n🎯 **Career Planning**\n• Exploring different career options\n• Understanding skill requirements\n• Salary and growth prospects\n\n📚 **Education & Courses**\n• Free and affordable course recommendations\n• Distance learning options\n• Skill development programs\n\n💰 **Government Schemes**\n• Scholarships and financial aid\n• Skill development programs\n• Rural entrepreneurship support\n\n💼 **Job Opportunities**\n• Entry-level job options\n• Government job preparation\n• Freelancing opportunities\n\nWhat specific area would you like to explore? You can also try our career quiz to get personalized recommendations!"
  };

  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('career') || message.includes('job') || message.includes('profession')) {
      return botResponses.career;
    } else if (message.includes('programming') || message.includes('coding') || message.includes('software') || message.includes('develop')) {
      return botResponses.programming;
    } else if (message.includes('scholarship') || message.includes('financial aid') || message.includes('government scheme')) {
      return botResponses.scholarship;
    } else if (message.includes('business') || message.includes('startup') || message.includes('entrepreneur')) {
      return botResponses.business;
    } else if (message.includes('course') || message.includes('study') || message.includes('education') || message.includes('learn')) {
      return botResponses.courses;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickSuggestion = (suggestion) => {
    setInputText(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">AI Career Assistant</h1>
                <p className="text-blue-100">Your personal career guidance counselor</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-xs lg:max-w-md ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 ${message.sender === 'user' ? 'ml-3' : 'mr-3'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {message.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="flex">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <Bot className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="p-4 border-t bg-gray-50">
            <p className="text-sm text-gray-600 mb-2">Quick suggestions:</p>
            <div className="flex flex-wrap gap-2">
              {quickSuggestions.map((suggestion, index) => {
                const Icon = suggestion.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleQuickSuggestion(suggestion.text)}
                    className="flex items-center px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <Icon className="h-3 w-3 mr-1" />
                    {suggestion.text}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 border-t">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question here..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  inputText.trim()
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Chatbot;