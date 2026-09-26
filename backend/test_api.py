import requests

# Aapke local Django server ka URL
url = 'http://127.0.0.1:8000/api/predict/'

# Nayi email jo hum model ko test karne ke liye bhej rahe hain
data = {
    "text": "Congratulations! You have won a $1000 Walmart gift card. Click here to claim your free prize now!"
}

try:
    print("Sending request to Django API...")
    response = requests.post(url, json=data)
    
    # Result print karna
    print("Status Code:", response.status_code)
    print("Prediction Result:", response.json())
except Exception as e:
    print("Error:", e)