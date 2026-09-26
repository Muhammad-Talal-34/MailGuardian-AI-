from django.urls import path
from . import views

urlpatterns = [
    path('predict/', views.predict_spam, name='predict_spam'),
]