from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('automa/games_api', views.games_api, name="games_api"),
    path('automa/<str:bg_short_title>', views.automa, name="automa")
]