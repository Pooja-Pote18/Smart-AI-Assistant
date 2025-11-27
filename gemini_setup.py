import logging
from dotenv import load_dotenv
import os
import google.generativeai as genai

load_dotenv()

API_KEY = os.getenv("GOOGLE_API_KEY")

if not API_KEY:
    logging.error("GOOGLE_API_KEY not found in environment variables.")
else:
    genai.configure(api_key=API_KEY)
    logging.info("Gemini API configured successfully.")

def get_gemini_response(prompt):
    """Generate response from Gemini"""
    try:
        model = genai.GenerativeModel("gemini-2.5-flash")
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        logging.error(f"Gemini Error: {e}")
        return "⚠️ Error generating response."
