from django.urls import path
from webscrape import views

urlpatterns = [
    path('', views.lankaProperty, name='lankaproperty'),
]
