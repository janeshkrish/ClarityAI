import os
import requests
import google.generativeai as genai
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS # Used for handling cross-origin requests from the frontend

# Load environment variables from .env file
load_dotenv()

# Configure Flask app
app = Flask(__name__)
CORS(app) # Enable CORS to allow your frontend to connect

# Configure the Generative AI model with your API key
API_KEY = os.getenv("GOOGLE_API_KEY")
if not API_KEY:
    raise ValueError("GOOGLE_API_KEY not found. Please set it in your .env file.")

genai.configure(api_key=API_KEY)

# Select the model to use
model = genai.GenerativeModel('gemini-pro')

@app.route('/demystify', methods=['POST'])
def demystify():
    """
    API endpoint to receive legal text and return a simplified explanation from Generative AI.
    """
    # 1. Get the legal text from the incoming request
    data = request.get_json()
    legal_text = data.get('text', '')

    if not legal_text:
        return jsonify({"error": "No text provided"}), 400

    try:
        # 2. Craft a clear and specific prompt for the AI
        prompt = (
            "You are an expert at simplifying legal documents. "
            "Explain the following legal text in a simple, easy-to-understand way for a non-lawyer. "
            "Use clear, concise language and break down any complex terms. "
            "Do not add any additional information or opinions. "
            "The original text is:\n\n"
            f"```\n{legal_text}\n```"
        )
        
        # 3. Call the Generative AI model
        response = model.generate_content(prompt)
        
        # 4. Extract the simplified text from the AI's response
        simplified_text = response.text
        
        # 5. Return the simplified text to the frontend
        return jsonify({"summary": simplified_text})

    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({"error": "An error occurred while processing your request. Please try again."}), 500

if __name__ == '__main__':
    # Run the Flask app on localhost on port 5000
    app.run(debug=True, port=5000)