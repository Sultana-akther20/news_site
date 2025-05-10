from django.shortcuts import render
#from django.http import HttpResponse
from django.views import generic
from .models import Post

# Create your views here.
#def tons_of_news(request):
    #return HttpResponse("Hello, newstic!")
class PostList(generic.ListView):
    model = Post
    queryset = Post.objects.all()
    template_name = "newstic/post_list.html"
