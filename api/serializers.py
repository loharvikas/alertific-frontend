from rest_framework import serializers
from subscribe.models import Subscriber, AppStore, GooglePlay, Feedback
from subscribe.tasks import send_subscribe_email_task, send_feedback_email_task


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
        validated_data, app_created, platform = self.create_apps(validated_data)
        subscriber, sub_created, = Subscriber.objects.get_or_create(email=validated_data['email'])
        if 'app_store' in validated_data:
            app_store_obj = validated_data['app_store']
            subscriber.app_store.add(app_store_obj)
            app_name = app_store_obj.app_name
        if 'google_play' in validated_data:
            google_play_obj = validated_data['google_play']
            subscriber.google_play.add(google_play_obj)
            app_name = google_play_obj.app_name
        if app_created or sub_created:
            send_subscribe_email_task.delay(validated_data['email'], app_name, platform)
        subscriber.save()
        return subscriber

    def create_apps(self, validated_data):
        google_play = validated_data.get('google_play')
        app_store = validated_data.get('app_store')
        platform = None
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
            platform = 'google'

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
            platform = 'apple'

        return validated_data, created, platform


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'

    def create(self, validated_data):
        feedback = Feedback.objects.create(**validated_data)
        send_feedback_email_task.delay(feedback.email, feedback.message)
        return feedback
