from django.urls import path

from posts.views import SearchResultsList

urlpatterns = [
    path('search/', SearchResultsList.as_view(), name='search_results'),
]
