from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

def index(response):
    return HttpResponse("Connected")

def getCity(response, city):
    return HttpResponse("City is {}".format(city))

@csrf_exempt
def getModelInputs(request):
    user_data=JSONParser().parse(request)
    return JsonResponse(user_data)


