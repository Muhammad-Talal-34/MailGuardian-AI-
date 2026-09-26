from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import pickle  # joblib ki jagah pickle use karein kyunke save bhi pickle se hua tha
import os
from django.conf import settings

# Models ka path set karna
MODEL_DIR = os.path.join(settings.BASE_DIR, 'api', 'ml_models')

# Models ko load karna (rb = read binary mode mein open karein)
try:
    with open(os.path.join(MODEL_DIR, 'spam_model.pkl'), 'rb') as f:
        spam_model = pickle.load(f)
        
    with open(os.path.join(MODEL_DIR, 'vectorizer.pkl'), 'rb') as f:
        vectorizer = pickle.load(f)
        
    print("✅ ML Models Loaded Successfully!")
except Exception as e:
    print(f"❌ Error loading models: {e}")

# Prediction API
@csrf_exempt
def predict_spam(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email_text = data.get('text', '')

            if not email_text:
                return JsonResponse({'error': 'Please provide text'}, status=400)

            # Text ko maths mein convert karein aur predict karein
            vectorized_text = vectorizer.transform([email_text])
            prediction = spam_model.predict(vectorized_text)

            # Result format karein
            result = "Spam" if prediction[0] == 1 else "Legitimate (Ham)"

            return JsonResponse({'prediction': result, 'status': 'success'})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    
    return JsonResponse({'error': 'Only POST method allowed'}, status=405)