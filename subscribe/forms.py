from django import forms
from .models import Subscriber
from .tasks import send_subscribe_email_task


class GooglePlayForm(forms.Form):
    app_name = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'Google play app name'}))


class AppStoreForm(forms.Form):
    app_name = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'App store app name'}))


class SubscribeForm(forms.Form):
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={'placeholder': 'Your Email Id'}))


    def send_mail(self, email, app_id):
        return send_subscribe_email_task.delay(email, app_id)
