from rest_framework.routers import DefaultRouter
from .views import *
from django.urls import path, include


urlpatterns = [
    path('subscribe/', SubscriberAPIListView.as_view(), name='subscriber'),
    path('subscribe/<int:pk>/', SubscriberDetailView.as_view(), name='subscriber-detail'),
    path('feedback/', FeedbackSerializerView.as_view(), name='feedback')
]
