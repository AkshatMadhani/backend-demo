from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import os

app = FastAPI(title="Rural Education & Career Guidance API", version="0.1.0")

# Enable CORS for local development – adjust origins for production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # TODO: restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- Schemas ---------- #

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str

class CareerGuidanceRequest(BaseModel):
    age: int
    education_level: str
    subjects: Optional[List[str]] = None
    career_goal: Optional[str] = None
    rural_background: bool = True

class CareerGuidanceResponse(BaseModel):
    guidance: str

class QuizAnswer(BaseModel):
    question_id: int
    answer: str

class QuizSubmit(BaseModel):
    answers: List[QuizAnswer]

class QuizResult(BaseModel):
    field: str
    description: str

# ---------- Placeholder LLM / Logic ---------- #

# In a real implementation, integrate an LLM provider like OpenAI or Groq.
# For now, we use simple heuristic / stub responses.

def llm_stub(prompt: str) -> str:
    """Temporary stub that echoes prompt."""
    return f"[STUB RESPONSE] {prompt[:200]}..."

# ---------- Endpoints ---------- #

@app.get("/health")
async def health() -> dict:
    return {"status": "ok"}

@app.post("/api/chat", response_model=ChatResponse)
async def chat(req: ChatRequest):
    reply = llm_stub(req.message)
    return ChatResponse(reply=reply)

@app.post("/api/career-guidance", response_model=CareerGuidanceResponse)
async def career_guidance(req: CareerGuidanceRequest):
    prompt = (
        f"I am {req.age} years old and have completed {req.education_level}. "
        f"My favourite subjects are {', '.join(req.subjects or [])}. "
        f"I aspire to become {req.career_goal or 'Not sure'}. "
    )
    if req.rural_background:
        prompt += " I am from a rural area. Suggest accessible and affordable career paths and required learning roadmap with government schemes where applicable."
    guidance = llm_stub(prompt)
    return CareerGuidanceResponse(guidance=guidance)

# Simple in-memory quiz questions
QUIZ_QUESTIONS = [
    {"id": 1, "question": "Which activity do you enjoy the most?", "options": ["Building things", "Helping people", "Analysing data", "Creative arts"]},
    {"id": 2, "question": "Which subject did you like the most in school?", "options": ["Math/Science", "Biology", "Social Studies", "Art"]},
]

FIELD_MAP = {
    ("Building things", "Math/Science"): ("Engineering", "You enjoy creating and working with technical concepts."),
    ("Helping people", "Biology"): ("Healthcare", "You like caring for others and the life sciences."),
    ("Analysing data", "Math/Science"): ("Data Science", "You enjoy solving problems with data."),
    ("Creative arts", "Art"): ("Design & Arts", "You have a creative spark."),
}

@app.get("/api/quiz")
async def get_quiz():
    return {"questions": QUIZ_QUESTIONS}

@app.post("/api/quiz", response_model=QuizResult)
async def submit_quiz(payload: QuizSubmit):
    # Naive logic: look at first two answers
    if len(payload.answers) < 2:
        raise HTTPException(status_code=400, detail="Not enough answers")
    first = payload.answers[0].answer
    second = payload.answers[1].answer
    field, description = FIELD_MAP.get((first, second), ("General", "You have broad interests."))
    return QuizResult(field=field, description=description)

@app.get("/api/government-schemes")
async def government_schemes():
    # Hardcoded placeholder data
    schemes = [
        {
            "name": "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
            "benefits": "Free skill development courses for youth",
            "eligibility": "Indian citizens aged 15-45",
            "link": "https://www.pmkvyofficial.org/",
        },
        {
            "name": "National Scholarship Portal",
            "benefits": "Scholarships for students across India",
            "eligibility": "Varies by scholarship",
            "link": "https://scholarships.gov.in/",
        },
    ]
    return {"schemes": schemes}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=int(os.getenv("PORT", 8000)), reload=True)