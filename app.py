from flask import Flask, render_template, request, jsonify
from gemini_setup import get_gemini_response

app = Flask(__name__)

chat_history = []   # Store full chat history

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    bot_reply = get_gemini_response(user_message)

    chat_history.append({"user": user_message, "bot": bot_reply})

    return jsonify({"response": bot_reply, "history": chat_history})

@app.route("/history")
def history():
    return jsonify({"history": chat_history})

@app.route("/feedback", methods=["POST"])
def feedback():
    data = request.get_json()
    print("User Feedback:", data)
    return jsonify({"status": "received"})

if __name__ == "__main__":
    app.run(debug=True)
