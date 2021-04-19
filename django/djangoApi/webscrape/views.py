from django.shortcuts import render
from django.http import HttpResponse

def lankaProperty(request):
     return HttpResponse("https://www.lankapropertyweb.com/sale/index.php?search=1&location=Western_Moratuwa_362e373739343830_37392e383837303031&radius=&searchbox=Moratuwa")
       