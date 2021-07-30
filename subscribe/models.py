from django.db import models


class GooglePlay(models.Model):
    app_id = models.CharField(max_length=50)
    app_name = models.CharField(max_length=50, null=True, blank=True)
    developer_id = models.CharField(max_length=50, null=True, blank=True)
    app_icon = models.URLField(blank=True, null=True)

    def __str__(self):
        return f'{self.app_id}'


class AppStore(models.Model):
    app_id = models.CharField(max_length=50)
    app_name = models.CharField(max_length=50, null=True, blank=True)
    developer_id = models.CharField(max_length=50, null=True, blank=True)
    app_icon = models.URLField(blank=True, null=True)

    def __str__(self):
        return f'{self.app_id} - {self.app_name}'


class Subscriber(models.Model):
    email = models.EmailField(unique=True)
    google_play = models.ManyToManyField(GooglePlay, related_name='subscriber')
    app_store = models.ManyToManyField(AppStore, related_name='subscriber')

    def __str__(self):
        return self.email


class Feedback(models.Model):
    email = models.EmailField(unique=False)
    message = models.TextField()

    def __str__(self):
        return self.email
