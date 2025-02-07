import streamlit as st
from phi.agent import Agent
from phi.tools.firecrawl import FirecrawlTools
from phi.model.groq import Groq
from dotenv import load_dotenv

load_dotenv()

course_recommender_agent = Agent(
    name="Free Course Recommender",
    model=Groq(id='llama-3.1-8b-instant'),
    tools=[FirecrawlTools()], 
    markdown=True,
    description="You recommend free or affordable courses from trusted platforms.",
    instructions=[
        "Use FirecrawlTools to extract relevant course data from platforms such as Coursera, edX, Udemy Free, Khan Academy, SWAYAM, and Skill India.",
        "Ensure each recommendation includes course title, platform, key topics, certification availability, and a direct course link.",
        "Prioritize courses that are high-quality, accessible, and reputable."
    ]
)

st.title("Course Recommender")

learning_interest = st.text_input("What do you want to learn? (e.g., Data Science, AI, Marketing)")
education_level = st.selectbox("Select your education level", ["High School", "Undergraduate", "Graduate", "Other"])
budget = st.text_input("enter your budget for course") 

if st.button("Find Courses"):
    user_query = f"""
    I am interested in learning {learning_interest}. 
    My education level is {education_level}, and my budget is {budget} INR. 
    Please recommend free or affordable courses with details including course title, platform, key topics, certification availability, and direct course links.
    """
    
    with st.spinner("Fetching course recommendations..."):
        response = course_recommender_agent.run(user_query)
