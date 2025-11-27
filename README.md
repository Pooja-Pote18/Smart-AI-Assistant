# Smart-AI-Assistant

A lightweight, fast, and modern AI Chatbot built using Flask (Python backend) and Google Gemini API.
This project provides a simple UI to chat with an AI model while maintaining full chat history, feedback recording, and an easy integration setup.

**📌 Features**
1) AI Chatbot (Gemini API)
Uses Google Gemini 2.5 Flash model to generate fast & accurate responses.

2) Chat History Storage
Every user request + AI response is stored and returned as a JSON history.

3) Feedback Endpoint
Allows users to send feedback for improvement.

4) Clean Flask Backend
Simple API design for easy deployment and extension.

5) Environment Variable Support
Uses .env file to securely store API keys.

**🗂️ Project Structure**

Smart-AI-Assistant/

├── static/

      └── script.js

      └── style.css
      
├── templates/

     └── index.html

├── app.py                                  # Flask main server

├── gemini_setup.py                         # Gemini API setup & response function

├── requirements.txt                        # Project dependencies

└── .env                                    # Your API key 


**🔧 Installation & Setup**

            1) Create Virtual Environment
               
                    python -m venv venv
                  
                    source venv/bin/activate       # macOS/Linux
                    
                    venv\Scripts\activate          # Windows
            
            2) Install Dependencies
                     pip install -r requirements.txt
            
            3) Add Your Google API Key
                    Create a .env file in the root folder:
                    GOOGLE_API_KEY=your_api_key_here
            
            4) Running the App
                  Start the Flask server:
                    python app.py
            
            5) Server will run at:
                    http://127.0.0.1:5000/


**🧠 How It Works (Backend Flow)**

        -User sends message → /chat
        
        -Flask calls get_gemini_response() from gemini_setup.py
        
        -Gemini API returns response
        
        -App stores history & returns JSON
        
        -Feedback is optionally collected

**🧪 Technologies Used**

        Python
        
        Flask
        
        Google Generative AI (Gemini)
        
        HTML/CSS (Frontend)
        
        dotenv


**🚀 Future Enhancements**

      Add a full chat UI
      
      Add login/auth system
      
      Add database storage (MongoDB / Firebase)
      
      Add speech-to-text + text-to-speech
      
      Add multi-agent support


![image alt](https://github.com/Pooja-Pote18/Smart-AI-Assistant/blob/149da2ac080075940b49ac66964552fc2cbcbbe9/dashboard.PNG)


