import requests
import pandas as pd
import streamlit as st
from phi.agent import Agent
from phi.tools.serpapi_tools import SerpApiTools
from phi.model.groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()


job_data_agent = Agent(
    name="Job Data Fetcher",
    model=Groq(id='llama-3.1-8b-instant'),
    tools=[SerpApiTools],
    markdown=True,
    description="You are an expert in retrieving salary and job data from Levels.fyi.",
    instructions=[
        "Use SerpApiTools to search and extract job and salary data from Levels.fyi.",
        "Ensure the extracted data includes job title, company, location, base salary, and total compensation.",
        "Provide the data in a structured format for visualization.",
        "Avoid including unnecessary external links; focus on delivering insights."
    ]
)

st.title("job searcher")

job_role = st.text_input("Enter job title (e.g., Software Engineer, Data Scientist)")
location = st.text_input("Enter location (optional)")

if st.button("Fetch Salary Data"):
    user_query = f"Fetch salary data for {job_role} jobs in {location} from Levels.fyi. Provide job title, company, location, salary, and total compensation."
    
    with st.spinner("Fetching salary data..."):
        response = job_data_agent.run(user_query)
    
   
