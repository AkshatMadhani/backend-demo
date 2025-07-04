# Rural Career Guidance Platform

A comprehensive full-stack web application designed to help rural students and professionals discover career opportunities, access government schemes, and develop skills through personalized guidance.

## 🎯 Features

### 🧠 **Career Discovery Quiz**
- Interactive quiz to identify career preferences
- Personalized career recommendations based on answers
- Detailed career information including education requirements, salary ranges, and growth potential

### 🤖 **AI-Powered Chatbot**
- Intelligent career guidance assistant
- Quick question suggestions for common queries
- Real-time responses to career-related questions

### 💼 **Career Exploration**
- Comprehensive database of career options
- Advanced filtering and search capabilities
- Detailed information about education, skills, and growth prospects

### 🏛️ **Government Schemes & Scholarships**
- Curated list of government programs for rural students
- Detailed eligibility criteria and benefits information
- Direct links to official application portals

### 📚 **Free & Affordable Courses**
- Recommendations for skill development courses
- Filtering by category, cost, and certification
- Links to trusted educational platforms

## 🛠️ Technology Stack

### Frontend
- **React 18** with Vite for fast development
- **Tailwind CSS** for modern, responsive design
- **React Router** for navigation
- **Axios** for API communication
- **Lucide React** for beautiful icons

### Backend
- **Node.js** with Express.js
- **RESTful API** architecture
- **CORS** enabled for cross-origin requests
- **Modular data structure** for scalability

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rural-career-guidance
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../rural-career-app
   npm install
   ```

4. **Configure Environment Variables**
   ```bash
   cd ../backend
   cp .env.example .env
   # Edit .env file with your configuration
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   # Server will run on http://localhost:5000
   ```

2. **Start the Frontend Development Server**
   ```bash
   cd ../rural-career-app
   npm run dev
   # Application will run on http://localhost:5173
   ```

3. **Open your browser and navigate to** `http://localhost:5173`

## 📁 Project Structure

```
rural-career-guidance/
├── backend/                 # Express.js backend
│   ├── index.js            # Main server file
│   ├── package.json        # Backend dependencies
│   └── .env.example        # Environment variables template
├── rural-career-app/       # React frontend
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   │   └── Navbar.jsx
│   │   ├── pages/          # Main application pages
│   │   │   ├── Home.jsx
│   │   │   ├── Quiz.jsx
│   │   │   ├── Careers.jsx
│   │   │   ├── Chatbot.jsx
│   │   │   ├── Schemes.jsx
│   │   │   └── Courses.jsx
│   │   ├── utils/          # Utility functions
│   │   │   └── api.js
│   │   ├── App.jsx         # Main App component
│   │   └── index.css       # Global styles
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies
│   └── tailwind.config.js  # Tailwind CSS configuration
└── README.md               # Project documentation
```

## 🎨 Design Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Accessibility**: Designed with accessibility best practices
- **Dark/Light Theme**: Consistent color scheme throughout the application

## 🔧 API Endpoints

### Career Management
- `GET /api/careers` - Get all careers
- `GET /api/careers/:id` - Get specific career details

### Quiz System
- `GET /api/quiz` - Get quiz questions
- `POST /api/quiz/submit` - Submit quiz answers and get recommendations

### Chatbot
- `POST /api/chatbot` - Send message to AI assistant

### Government Schemes
- `GET /api/schemes` - Get all government schemes
- `GET /api/schemes/search` - Search schemes by query

### Courses
- `POST /api/courses` - Get course recommendations
- `GET /api/courses/search` - Search courses

## 🌟 Key Features for Rural Students

### **Accessibility-First Design**
- Simple, intuitive interface designed for users with varying technical skills
- Clear navigation and consistent design patterns
- Mobile-optimized for smartphone users

### **Localized Content**
- Focus on opportunities available in rural areas
- Government schemes specifically for rural development
- Agricultural and traditional career paths included

### **Practical Guidance**
- Step-by-step application processes
- Realistic salary expectations
- Alternative career paths and skill development options

## 🚀 Future Enhancements

- **Multi-language Support**: Add regional language options
- **User Accounts**: Personal progress tracking and saved recommendations
- **Advanced AI Integration**: Integration with GPT/Gemini for better responses
- **Mobile App**: Native Android/iOS applications
- **Offline Support**: Downloadable content for areas with poor connectivity
- **Community Features**: Forums and peer-to-peer guidance

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation for common solutions

## 🙏 Acknowledgments

- **Government of India** for various rural development schemes
- **Educational Platforms** (Coursera, SWAYAM, Khan Academy, etc.) for course data
- **Open Source Community** for the amazing tools and libraries used

---

**Made with ❤️ for Rural Education and Development**