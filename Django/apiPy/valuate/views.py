from django.shortcuts import render
from django.http import HttpResponse

def index(response):
    return HttpResponse("Connected")

def getCity(response, city):
    return HttpResponse("City is {}".format(city))

