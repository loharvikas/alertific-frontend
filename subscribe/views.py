from django.shortcuts import render, reverse
from django.views.generic import FormView, ListView, TemplateView, View
from .forms import AppStoreForm, GooglePlayForm, SubscribeForm
import play_scraper
from .models import GooglePlay, Subscriber, AppStore
from itunes_app_scraper.scraper import AppStoreScraper
from pprint import pprint
from django.conf import settings
from django.http import JsonResponse


# Create your views here.

class HomePageView(TemplateView):
    template_name = "subscribe/home.html"


class GooglePlayFormView(FormView):
    template_name = "subscribe/google_play.html"
    form_class = GooglePlayForm

    def get_success_url(self):
        return reverse('subscribe:google-app-list', args=[self.kwargs.get('app_name')])

    def form_valid(self, form):
        app_name = form.cleaned_data['app_name']
        self.kwargs.update(
            {
                'app_name': app_name
            }
        )
        print("KWARGS:", self.kwargs)
        return super(GooglePlayFormView, self).form_valid(form)


class GooglePlayAppListView(View):

    def get(self, request, app_name, *args, **kwargs):
        print("APP_NAME:", app_name)
        print(request)
        data = play_scraper.search(app_name, page=1, gl=settings.DEFAULT_COUNTRY)
        return JsonResponse(data, safe=False)


class GoogleSubscribeFormView(FormView):
    template_name = "subscribe/subscribe.html"
    form_class = SubscribeForm
    success_url = '/'
    print('fjoifefoehjf')

    def form_valid(self, form):
        app_id = self.kwargs['app_id']
        from google_play_scraper import app
        details = app(
            app_id,
            lang='en',
            country='in'
        )
        pprint(details)
        app_name = details['title']
        developer_id = details['developerId']
        email = form.cleaned_data['email']
        sub, sub_created = Subscriber.objects.get_or_create(email=email)
        app, app_created = GooglePlay.objects.get_or_create(app_id=app_id,
                                                            app_name=app_name,
                                                            developer_id=developer_id)
        # if sub_created or app_created:
        #     form.send_mail(email, app_id)
        sub.google_app_id.add(app)
        sub.save()
        return super(GoogleSubscribeFormView, self).form_valid(form)


class AppStoreFormView(FormView):
    form_class = AppStoreForm
    template_name = "subscribe/app_store.html"

    def get_success_url(self):
        return reverse('subscribe:app-store-app-list', args=[self.kwargs.get('app_name')])

    def form_valid(self, form):
        app_name = form.cleaned_data['app_name']
        self.kwargs.update(
            {
                'app_name': app_name
            }
        )
        print("KWARGS:", self.kwargs)
        return super(AppStoreFormView, self).form_valid(form)


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


'http://itunes.apple.com/rss/customerreviews/page=1/id=389801252/app/sortby=mostrecent/json?cc=in';


class AppStoreSubscribeForm(FormView):
    template_name = "subscribe/subscribe.html"
    form_class = SubscribeForm
    success_url = '/'

    def form_valid(self, form):
        app_id = self.kwargs['app_id']
        email = form.cleaned_data['email']
        scraper = AppStoreScraper()
        details = scraper.get_app_details(app_id=app_id, country="in")
        app_name = details['trackName']
        devloper_id = details['artistId']
        sub, sub_created = Subscriber.objects.get_or_create(email=email)
        print("APP:", AppStore)
        app, app_created = AppStore.objects.get_or_create(app_id=app_id,
                                                          app_name=app_name,
                                                          developer_id=devloper_id)
        # if sub_created or app_created:
        #     form.send_mail(email, app_id)
        sub.apple_app_id.add(app)
        sub.save()
        return super(AppStoreSubscribeForm, self).form_valid(form)
