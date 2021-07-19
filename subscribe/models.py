from django.db import models


class GooglePlay(models.Model):
    app_id = models.CharField(max_length=50)
    app_name = models.CharField(max_length=50, null=True, blank=True)
    developer_id = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return f'{self.app_id}'


class AppStore(models.Model):
    app_id = models.CharField(max_length=50)
    app_name = models.CharField(max_length=50, null=True, blank=True)
    developer_id = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return f'{self.app_id} - {self.app_name}'


class Subscriber(models.Model):
    email = models.EmailField(unique=True)
    google_app_id = models.ManyToManyField(GooglePlay, related_name='subscriber')
    apple_app_id = models.ManyToManyField(AppStore, related_name='subscriber')

    def __str__(self):
        return self.email
