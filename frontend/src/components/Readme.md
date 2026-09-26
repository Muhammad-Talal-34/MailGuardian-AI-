MailGuardian AI - Threat Intelligence Engine
An advanced, full-stack Spam Email Classification System designed to detect phishing attempts, malicious payloads, and unauthorized spam content in real-time. This project features a decoupled architecture with a Python/Django REST API backend and a high-end, cyberpunk-themed React frontend.

The intelligence engine is powered by a Scikit-Learn Multinomial Naïve Bayes Natural Language Processing (NLP) model, trained on the renowned Enron Email Dataset.

✨ Key Features
High-Precision NLP Engine: Achieves 98.29% classification accuracy using TF-IDF text vectorization and a Naïve Bayes classifier.

Real-Time Payload Inspection: Instantaneous text evaluation through a lightweight Django REST endpoint.

Futuristic UI/UX: Built with React and pure CSS featuring glassmorphism, animated scanning lasers, glowing data nodes, and responsive grid layouts.

Decoupled Architecture: Frontend and backend operate independently, communicating securely via standard JSON payloads with configured CORS policies.

🛠️ Tech Stack
Frontend (Client)

React.js

Lucide React (Icons)

Axios (API Requests)

Custom CSS (Cyberpunk/Glassmorphism Theme)

Backend (API & Machine Learning)

Python 3.x

Django & Django REST Framework

Scikit-Learn (Machine Learning)

Pandas (Data Preprocessing)

django-cors-headers

🧠 Machine Learning Model Details
Dataset: Enron Spam Dataset (33,716 preprocessed email vectors).

Algorithm: Multinomial Naïve Bayes (MultinomialNB).

Feature Extraction: Term Frequency-Inverse Document Frequency (TfidfVectorizer) capped at 5,000 maximum features and utilizing English stop-words removal.

Artifacts: The trained model and vectorizer are serialized as .pkl files and dynamically loaded into the Django server memory upon initialization.

🚀 Installation & Setup
1. Backend Setup (Django + ML)
Open your terminal and navigate to your backend directory:

Bash
# Navigate to backend directory
cd backend

# Create and activate a virtual environment
python -m venv env
source env/Scripts/activate  # Windows
# source env/bin/activate    # Mac/Linux

# Install required Python packages
pip install django djangorestframework django-cors-headers pandas scikit-learn

# Place your trained models (spam_model.pkl, vectorizer.pkl) inside the api/ml_models/ directory.

# Start the Django development server
python manage.py runserver
The backend API will run at [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

2. Frontend Setup (React)
Open a new terminal window and navigate to your frontend directory:

Bash
# Navigate to frontend directory
cd frontend

# Install Node modules and dependencies
npm install
npm install lucide-react axios

# Start the React development server
npm start
The frontend application will run at http://localhost:3000/

📁 Project Structure
Plaintext
MailGuardian-AI/
├── backend/
│   ├── api/
│   │   ├── ml_models/
│   │   │   ├── spam_model.pkl      # Trained Naïve Bayes model
│   │   │   └── vectorizer.pkl      # Trained TF-IDF Vectorizer
│   │   ├── views.py                # Prediction API Endpoint
│   │   └── urls.py
│   ├── core_project/
│   │   └── settings.py             # CORS & Installed Apps configuration
│   └── manage.py
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── SpamChecker.jsx     # Main Scanner UI Component
    │   ├── services/
    │   │   └── api.js              # Axios HTTP client
    │   ├── App.jsx                 # Dashboard Layout (Navbar/Footer)
    │   ├── App.css                 # Layout CSS
    │   └── index.css               # Global Cyberpunk Theme CSS
    └── package.json
🔌 API Documentation
Endpoint: POST /api/predict_spam/

Request Payload:

JSON
{
  "text": "Congratulations! You have been selected to win a $1,000 gift card. Click here to claim your prize."
}
Response Payload:

JSON
{
  "prediction": "Spam",
  "status": "success"
}