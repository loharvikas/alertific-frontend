from celery import shared_task
from subscribe.email import send_subscribed_email, send_review_email
from celery.utils.log import logger
from .scrapper import fetch_reviews_from_google_play, fetch_reviews_from_app_store
from .models import Subscriber, GooglePlay, AppStore
from .email import send_feedback_email


@shared_task
def send_subscribe_email_task(email, app_id, platform):
    logger.info("Sent email")
    return send_subscribed_email(email, app_id, platform)

@shared_task
def send_feedback_email_task(email, message):
    logger.info("Sent email")
    return send_feedback_email(email, message)


@shared_task
def send_app_reviews():
    scrap_google_play.delay()
    scrap_app_store.delay()

@shared_task
def scrap_google_play():
    apps = GooglePlay.objects.all()
    for app in apps:
        scrap_app_reviews_for_google_play.delay(app.pk)


@shared_task
def scrap_app_store():
    apps = AppStore.objects.all()
    for app in apps:
        print("APP:", app)
        scrap_app_reviews_for_app_store.delay(app.pk)


@shared_task
def scrap_app_reviews_for_app_store(id):
    app = AppStore.objects.get(pk=id)
    result = fetch_reviews_from_app_store(app.app_id)
    subscriber_list = app.subscriber.all()
    for subscriber in subscriber_list:
        print("SUBSCRIBER: SENDING EMAILS APP STORE", subscriber.email)
        send_review_email_task.delay(email=subscriber.email,
                                     app_id=app.app_id,
                                     reviews=result,
                                     app_name=app.app_name,
                                     platform="App Store",
                                     app_icon=app.app_icon
                                     )


@shared_task
def scrap_app_reviews_for_google_play(id):
    logger.info("Sent app instance for fetching reviews")
    app = GooglePlay.objects.get(pk=id)
    result = fetch_reviews_from_google_play(app.app_id)
    subscriber_list = app.subscriber.all()
    for subscriber in subscriber_list:
        print("SUBSCRIBER: SENDING EMAILS", subscriber.email)
        send_review_email_task.delay(email=subscriber.email,
                                     app_id=app.app_id,
                                     reviews=result,
                                     app_name=app.app_name,
                                     platform="Google Play",
                                     app_icon=app.app_icon
                                     )


@shared_task
def send_review_email_task(email, app_name, app_id, reviews, platform, app_icon):
    logger.info("SENDING REVIEW EMAIL")
    return send_review_email(email, app_name, app_id, reviews, platform, app_icon)
