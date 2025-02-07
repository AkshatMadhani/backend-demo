import streamlit as st
from phi.agent import Agent
from phi.tools.firecrawl import FirecrawlTools
from phi.model.groq import Groq
from dotenv import load_dotenv

load_dotenv()
scholarship_agent = Agent(
    name="Scholarship Advisor",
    model=Groq(id='llama-3.1-8b-instant'),
    tools=[FirecrawlTools()],  
    markdown=True,
    description="You are an expert in providing Indian government scholarship guidance based on eligibility and benefits.",
    instructions=[
        "Use FirecrawlTools to search and extract real-time scholarship data from official Indian government portals.",
        "Provide comprehensive details about scholarships, including eligibility, benefits, deadlines, and the application process.",
        "Ensure recommendations are relevant based on the student's education level, income category, and background (SC/ST/OBC/EWS).",
        "Suggest additional financial aid programs if a student does not qualify for a specific scholarship.",
        "Ensure accuracy by only using government-approved scholarships and avoiding unofficial or unverified sources."
    ]
)

st.title("Government Scholarship Finder")

education_level = st.selectbox("Select your current education level", ["High School", "Undergraduate", "Postgraduate"])
category = st.selectbox("Select your category", ["General", "SC", "ST", "OBC", "EWS"])
annual_family_income = st.number_input("Enter your annual family income (INR)", min_value=0, max_value=1000000, value=250000)

if st.button("Find Scholarships"):
    user_query = f"""
    I am a {education_level} student belonging to the {category} category. 
    My annual family income is {annual_family_income} INR. 
    Please provide Indian government scholarships I am eligible for, including details such as eligibility, benefits, application deadlines, and how to apply.
    """
    
    with st.spinner("Fetching scholarship details..."):
        response = scholarship_agent.run(user_query)
    
    st.write(response.content)
