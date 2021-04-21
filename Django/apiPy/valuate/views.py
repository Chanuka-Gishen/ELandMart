from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import csv

def index(response):
    return HttpResponse("Connected")

def getCity(response, city):
    return HttpResponse("City is {}".format(city))

@csrf_exempt
def export_csv(request):
    user_data=JSONParser().parse(request)
    data = user_data
    
    with open('writeData.csv', mode='w') as file:
        writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

        #way to write to csv file
        writer.writerow(["Distance_Nearest_Town","Perch","Year"])
        writer.writerow(data)
    print(data)
    return JsonResponse(data, safe= False)


