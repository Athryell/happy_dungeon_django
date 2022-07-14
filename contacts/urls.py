from django.urls import path
from . import views

urlpatterns = [
    path('', views.contact, name="contact"),
    path('mail-sent/', views.mail_sent, name="mail-sent")
]