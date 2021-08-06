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
    email = models.EmailField(unique=False)
    google_play = models.ManyToManyField(GooglePlay, related_name='subscriber')
    app_store = models.ManyToManyField(AppStore, related_name='subscriber')
    country = models.ManyToManyField('Country', related_name="subscriber")

    def __str__(self):
        return self.email


class Country(models.Model):
    country_code = models.CharField(max_length=2, unique=True)
    country_name = models.CharField(max_length=50, null=True, blank=True)
    google_play = models.ManyToManyField(GooglePlay, related_name='countries')
    app_store = models.ManyToManyField(AppStore, related_name='countries')

    def __str__(self):
        return self.country_code


class Feedback(models.Model):
    email = models.EmailField(unique=False)
    message = models.TextField()

    def __str__(self):
        return self.email
