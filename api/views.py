from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet, generics
from subscribe.models import Subscriber
from .serializers import SubscriberSerializer
from rest_framework.permissions import AllowAny


class SubscriberAPIListView(generics.ListCreateAPIView):
    queryset = Subscriber.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = SubscriberSerializer

class SubscrberDetailView(generics.RetrieveAPIView):
    queryset = Subscriber.objects.all()
    permission_classes = (AllowAny, )
    serializer_class = SubscriberSerializer





