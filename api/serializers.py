from rest_framework import serializers
from subscribe.models import Subscriber, AppStore, GooglePlay, Feedback


class AppStoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppStore
        fields = ('app_id', 'app_name', 'developer_id')


class GooglePlaySerializer(serializers.ModelSerializer):
    class Meta:
        model = GooglePlay
        fields = ('app_id', 'app_name', 'developer_id')


class SubscriberSerializer(serializers.ModelSerializer):
    app_store = AppStoreSerializer(required=False, many=True)
    google_play = GooglePlaySerializer(required=False, many=True)

    class Meta:
        model = Subscriber
        fields = '__all__'
        extra_kwargs = {
            'email': {'validators': []},
        }

    def create(self, validated_data):
        print("VALIDS:", validated_data)
        validated_data, app_created = self.create_apps(validated_data)
        subscriber, created = Subscriber.objects.get_or_create(email=validated_data['email'])
        if 'app_store' in validated_data:
            subscriber.app_store.add(validated_data['app_store'])
        if 'google_play' in validated_data:
            subscriber.google_play.add(validated_data['google_play'])
        subscriber.save()
        return subscriber

    def create_apps(self, validated_data):
        google_play = validated_data.get('google_play')
        app_store = validated_data.get('app_store')
        if google_play:
            google_play = google_play[0]
            app_id = google_play.pop('app_id')
            app_name = google_play.pop('app_name')
            developer_id = google_play.pop('developer_id')
            google_play_obj, created = GooglePlay.objects.get_or_create(
                app_id=app_id,
                app_name=app_name,
                developer_id=developer_id
            )
            validated_data['google_play'] = google_play_obj

        if app_store:
            app_store = app_store[0]
            app_id = app_store.pop('app_id')
            app_name = app_store.pop('app_name')
            developer_id = app_store.pop('developer_id')
            app_store_obj, created = AppStore.objects.get_or_create(
                app_id=app_id,
                app_name=app_name,
                developer_id=developer_id
            )
            validated_data['app_store'] = app_store_obj

        return validated_data, created


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'

    def create(self, validated_data):
        email = validated_data['email']
        return Feedback.objects.create(**validated_data)