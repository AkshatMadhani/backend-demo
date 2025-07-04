# Rural Education & Career Guidance Platform

This project is a lightweight full-stack application that helps students from rural areas choose the right career path. It provides:

1. An AI-powered chatbot for instant Q&A
2. A career-guidance form that returns personalised advice
3. A catalogue of Indian government schemes & scholarships
4. A short quiz to identify the user’s preferred field of study

## Tech Stack

Frontend: React + Vite (JavaScript)  
Backend: FastAPI (Python) with CORS enabled  
Style: Basic CSS (feel free to add Tailwind/Bootstrap)

## Getting Started

### Requirements

* Node >= 16  
* Python >= 3.9  
* `pip` & `venv` (or use your own preferred environment manager)

### 1. Clone & Install

```bash
# Backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Frontend
cd frontend
npm install
```

### 2. Run Development Servers

```bash
# In one terminal – backend
uvicorn backend.main:app --reload --port 8000

# In another terminal – frontend
cd frontend
npm run dev
```

Open http://localhost:5173 (or the port shown) in your browser.

The frontend will proxy API requests directly to `http://localhost:8000` (configure via `VITE_API_URL` if you need a different URL).

### 3. Build for Production

```bash
# Frontend build
cd frontend
npm run build
# Static assets will be in frontend/dist
```

Feel free to extend, style, or connect the placeholder LLM integration to OpenAI, Groq, or any other provider.

## Directory Structure

```
backend/          – FastAPI application
frontend/         – React SPA (Vite)
requirements.txt  – Python dependencies
README.md         – This file
```

## TODO / Ideas

* Replace `llm_stub` with a real LLM call (OpenAI, Groq, etc.)
* Refine quiz logic, store user progress in a database
* Add authentication so users can save their roadmap
* Improve UI/UX, add responsive design
* Internationalise language for other regions