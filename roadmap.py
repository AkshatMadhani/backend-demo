import streamlit as st
from phi.agent import Agent
from phi.tools.exa import ExaTools
from phi.model.groq import Groq
from dotenv import load_dotenv

load_dotenv()

roadmap_recommender_agent = Agent(
    name="Student Roadmap Advisor",
    model=Groq(id='llama-3.1-8b-instant'),
    tools=[ExaTools()],  
    markdown=True,
    description="You are an expert in creating step-by-step learning and career roadmaps for students.",
    instructions=[
        "Use Exa to search and extract real-time data from trusted educational and career platforms.",
        "Provide a structured roadmap for students based on their selected field of study and career goals.",
        "Ensure the roadmap includes beginner, intermediate, and advanced steps.",
        "Include recommended free/affordable courses, projects, certifications, and key skills to develop.",
        "Suggest internships, freelance opportunities, and industry trends relevant to the roadmap.",
        "Ensure the roadmap is practical, achievable, and optimized for success in the given career field."
    ]
)

st.title(" Career & Learning Roadmap ")

career_goal = st.text_input("What career do you want to pursue? (e.g., Data Scientist, Web Developer, Marketing Specialist)")
education_level = st.selectbox("Select your current education level", ["High School", "Undergraduate", "Graduate", "Other"])
time_commitment = st.text_input("How many hours per week can you dedicate to learning?")

if st.button("Generate Roadmap"):
    user_query = f"""
    I want to pursue a career as a {career_goal}. 
    My current education level is {education_level}, and I can dedicate {time_commitment} hours per week to learning. 
    Please provide a detailed step-by-step roadmap, including key skills, courses (preferably free or low-cost), certifications, projects, internships, and industry insights.
    """
    
    with st.spinner("Generating your personalized roadmap..."):
        response = roadmap_recommender_agent.run(user_query)
    
    st.write(response.content)
