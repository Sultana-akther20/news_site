from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def tons_of_news(request):
    return HttpResponse("Hello, newstic!")
