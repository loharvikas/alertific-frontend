from django.views.generic import FormView, ListView, TemplateView, View
import play_scraper
from itunes_app_scraper.scraper import AppStoreScraper
from django.conf import settings
from django.http import JsonResponse


class GooglePlayAppListView(View):

    def get(self, request, app_name, *args, **kwargs):
        print("APP_NAME:", app_name)
        print(request)
        data = play_scraper.search(app_name, page=1, gl=settings.DEFAULT_COUNTRY)
        return JsonResponse(data, safe=False)


class AppStoreAppListView(View):

    def get(self, request, app_name, *args, **kwargs):
        scraper = AppStoreScraper()
        results = scraper.get_app_ids_for_query(app_name, country=settings.DEFAULT_COUNTRY)
        if len(results):
            results = results[:8]
        data = []
        for i in results:
            detail = scraper.get_app_details(app_id=i, country=settings.DEFAULT_COUNTRY)
            detail['title'] = detail.pop('trackName')
            detail['developer'] = detail.pop('artistName')
            detail['developer_id'] = detail.pop('artistId')
            detail['app_id'] = detail.pop('trackId')
            detail['icon'] = detail.pop('artworkUrl512')
            data.append(detail)
        return JsonResponse(data, safe=False)
