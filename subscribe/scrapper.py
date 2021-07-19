from datetime import datetime, time, timedelta
from google_play_scraper import Sort, reviews, app
import concurrent.futures
from app_store_scraper import AppStore
import play_scraper
from app_store_scraper import AppStore
from django.conf import settings
import requests
from requests.exceptions import HTTPError


def is_yesterday(timestamp):
    today = datetime.combine(datetime.today(), time.min) + timedelta(hours=5)
    yesterday = today - timedelta(days=1)
    return yesterday <= timestamp < today


#
# def fetch_reviews(app):
#     subscriber_list = app.subscriber.all()
#     with concurrent.futures.ThreadPoolExecutor() as executor:
#         app_store_reviews = executor.submit(fetch_reviews_from_app_store, app)
#         play_store_reviews = executor.submit(fetch_reviews_from_google_play, app)
#     app_store_reviews = app_store_reviews.result()
#     play_store_reviews = play_store_reviews.result()
#     return subscriber_list, app_store_reviews, play_store_reviews


def fetch_reviews_from_app_store(app_id):
    reviews = fetch_appstore_reviews(str(app_id), settings.DEFAULT_COUNTRY, "1")
    print("APP_NAME:", app_id)
    return reviews


def fetch_reviews_from_google_play(app_id):
    print("GOOGLE_PLAY:", app_id)
    print("COUNTRY:", settings.DEFAULT_COUNTRY)
    result, continution_token = reviews(
        app_id,
        lang="en",
        country=settings.DEFAULT_COUNTRY,
        sort=Sort.NEWEST,
        count=30,
    )
    return result


#
# def find_google_play_app_id(app_name, developer_name):
#     search_term = app_name + ' ' + developer_name
#     apps = play_scraper.search(search_term, page=3)
#     app_id = False
#     for a in apps:
#         dev = a['developer'].lower()
#         title = a['title'].lower()
#         if app_name == title:
#             if developer_name == dev:
#                 app_id = a['app_id']
#                 break
#     return app_id


def fetch_appstore_reviews(app_id, country, page):
    url = 'https://itunes.apple.com/rss/customerreviews/page=' + page + '/id=' + app_id + '/sortby=mostrecent/json?cc=' + country
    print("URL:", url)
    try:
        response = requests.get(url)

        response.raise_for_status()
    except HTTPError as http_err:
        print(f'HTTP error occurred: {http_err}')
    except Exception as err:
        print(f'Other error occurred: {err}')
    else:
        print("Success")

    content = response.json()
    entry = content['feed']['entry']

    reviews = list()
    for review in entry:
        comment = dict()
        comment['id'] = review['id']['label']
        comment['userName'] = review['author']['name']['label']
        comment['score'] = review['im:rating']['label']
        comment['title'] = review['title']['label']
        comment['content'] = review['content']['label']
        comment['at'] = review['updated']['label'].strip('T')
        reviews.append(comment)

    return reviews
