from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("Connected")

def getLankaProperty(request):
    return HttpResponse("https://www.lankapropertyweb.com/sale/index.php?search=1&location=Western_Moratuwa_362e373739343830_37392e383837303031&radius=&searchbox=Moratuwa")

def getIkmanLk(request):
    return HttpResponse("https://ikman.lk/en/ads/sri-lanka/property?sort=relevance&buy_now=0&urgent=0&query=moratuwa&page=1")

def getCeylonProperty(request):
    return HttpResponse("https://www.ceylonproperty.lk/buy_property?city=Moratuwa&propertyType=3&cityIndex=358")

