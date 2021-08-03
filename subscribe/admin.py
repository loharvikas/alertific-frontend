from django.contrib import admin
from .models import Subscriber, GooglePlay, AppStore, Country
# Register your models here.
admin.site.register(Subscriber)
admin.site.register(GooglePlay)
admin.site.register(AppStore)
admin.site.register(Country)
