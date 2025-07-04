import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add any auth headers here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// Career API calls
export const careerAPI = {
  getAll: () => api.get('/careers'),
  getById: (id) => api.get(`/careers/${id}`),
};

// Quiz API calls
export const quizAPI = {
  getQuestions: () => api.get('/quiz'),
  submitAnswers: (answers) => api.post('/quiz/submit', { answers }),
};

// Chatbot API calls
export const chatbotAPI = {
  sendMessage: (message) => api.post('/chatbot', { message }),
};

// Government schemes API calls
export const schemesAPI = {
  getAll: () => api.get('/schemes'),
  search: (query) => api.get(`/schemes/search?q=${query}`),
};

// Courses API calls
export const coursesAPI = {
  getRecommendations: (interest, education) => 
    api.post('/courses', { interest, education }),
  search: (query) => api.get(`/courses/search?q=${query}`),
};

export default api;