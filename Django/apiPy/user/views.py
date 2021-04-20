from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators import csrf
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from user.serializers import UserSerializer
from user.models import UserDetails

def index(request):
    return HttpResponse("Curd Opertations")

@csrf_exempt
def addNewUser(request):
    if request.method == 'POST':
        user_data = JSONParser().parser(request)
        user_serializer = UserSerializer(data=user_data)
        if user_serializer.isValid():
            user_serializer.save()
            return JsonResponse("Added Successfully", safe= False)
        else:
            return JsonResponse("Added Failed", safe= False)
    
    if request.method == 'GET':
        users = UserDetails.objects.all()
        user_serializer = UserSerializer(users, many = True)
        return JsonResponse(user_serializer.data, safe= False)


    