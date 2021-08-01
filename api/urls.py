from .views import *
from django.urls import path


urlpatterns = [
    path('subscribe/', SubscriberAPIListView.as_view(), name='subscriber'),
    path('subscribe/<int:pk>/', SubscriberDetailView.as_view(), name='subscriber-detail'),
    path('feedback/', FeedbackSerializerView.as_view(), name='feedback'),
    path("google/<str:app_name>/", GooglePlayAppListView.as_view(), name="google-app-list"),
    path("apple/<str:app_name>/", AppStoreAppListView.as_view(), name="app-store-app-list"),
]
