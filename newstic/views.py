from django.shortcuts import render
#from django.http import HttpResponse
from django.views import generic
from .models import Article

# Create your views here.
#def tons_of_news(request):
    #return HttpResponse("Hello, newstic!")
class ArticleList(generic.ListView):
    model = Article
    queryset = Article.objects.filter(status=1)
    template_name = "newstic/Post_list.html"
