from rest_framework.viewsets import generics
from subscribe.models import Subscriber, Feedback
from .serializers import SubscriberSerializer, FeedbackSerializer
from rest_framework.permissions import AllowAny
from rest_framework.authentication import SessionAuthentication, BasicAuthentication


class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening


class SubscriberAPIListView(generics.ListCreateAPIView):
    queryset = Subscriber.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = SubscriberSerializer
    # authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)


class SubscriberDetailView(generics.RetrieveAPIView):
    queryset = Subscriber.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = SubscriberSerializer


class FeedbackSerializerView(generics.ListCreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = (AllowAny,)
    # authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
