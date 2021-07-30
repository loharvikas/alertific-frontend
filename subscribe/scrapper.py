from datetime import datetime, time, timedelta
from google_play_scraper import Sort, reviews
from django.conf import settings
import requests
from requests.exceptions import HTTPError


def is_yesterday(timestamp):
    today = datetime.combine(datetime.today(), time.min) + timedelta(hours=8)
    yesterday = today - timedelta(days=1)
    return yesterday <= timestamp < today


def fetch_reviews_from_app_store(app_id):
    reviews = fetch_appstore_reviews(str(app_id), settings.DEFAULT_COUNTRY, "1")
    print("APP_NAME:", app_id)
    return reviews


def fetch_reviews_from_google_play(app_id):
    print("GOOGLE_PLAY:", app_id)
    print("COUNTRY:", settings.DEFAULT_COUNTRY)
    results, continution_token = reviews(
        app_id,
        lang="en",
        country=settings.DEFAULT_COUNTRY,
        sort=Sort.NEWEST,
        count=30,
    )
    result_by_date = []
    for result in results:
        date_time = result['at']
        date_time = datetime.strftime(date_time, '%Y-%m-%d')
        date_time_obj = datetime.strptime(date_time, '%Y-%m-%d')
        print("DATE_TIME:", date_time)
        print("DATE_TIME:", date_time_obj)
        if is_yesterday(date_time_obj):
            # date_time = datetime.strftime(date_time, '%Y-%m-%d')
            result['at'] = date_time
            result_by_date.append(result)
    return result_by_date


def fetch_appstore_reviews(app_id, country, page):
    url = 'https://itunes.apple.com/rss/customerreviews/page=' + page + '/id=' + app_id + '/sortby=mostrecent/json?cc=' + country
    print(url)
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
        comment['at'] = review['updated']['label'].split('T')[0]
        reviews.append(comment)

    return reviews
