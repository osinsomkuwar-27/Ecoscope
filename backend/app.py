from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017/")
db = client["ecoscope"]
feedbacks = db["feedbacks"]

@app.route("/api/data")
def get_data():
    dummy_data = [
        {"temperature": 26, "aqi": 78, "wind": "5 km/h", "humidity": 65}
    ]
    return jsonify(dummy_data)

@app.route("/submit-feedback", methods=["POST"])
def submit_feedback():
    data = request.json
    if data:
        feedbacks.insert_one(data)
        return jsonify({"message": "Feedback submitted successfully!"})
    return jsonify({"message": "No data received"}), 400

if __name__ == "__main__":
    app.run(debug=True)
