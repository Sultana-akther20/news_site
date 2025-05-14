from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.views import generic
from .models import Article
from django.contrib.admin.views.decorators import staff_member_required
from .news_fetcher import fetch_latest_news
import requests 
from .forms import Form

# Create your views here.
#def tons_of_news(request):
    #return HttpResponse("Hello, newstic!")
class ArticleList(generic.ListView):
    model = Article
    queryset = Article.objects.filter(status=1)
    template_name = "newstic/index.html"
    paginate_by = 6

def post_detail(request, slug):
    """
    Display an individual :model:`newstic.Post`.

    **Context**

    ``post``
        An instance of :model:`newstic.Post`.

    **Template:**

    :template:`newstic/post_detail.html`
    """

    queryset = Article.objects.filter(status=1)
    post = get_object_or_404(queryset, slug=slug)
    comments = post.comments.all().order_by("-created_at")
    comment_count = post.comments.filter(approved=True).count()

    return render(
        request,
        "newstic/post_detail.html",
        {"post": post,
        "comments": comments,
        "comment_count": comment_count,
        "coders": "Sultana Akther"},

    )

#@staff_member_required
#def update_news(request):
 #   fetch_latest_news()
  #  return HttpResponse("News updated successfully.")

@staff_member_required
def fetch_news(request):
    """Admin view to fetch latest news from an API"""
    # Here you could use your fetch_latest_news function
    url = 'https://newsapi.org/v2/top-headlines'
    params = {
        'sources': 'bbc-news,cnn,reuters',
        'apiKey': 'a4e5c2ad9a564f55b74c6308aaee5824'  # Replace with your actual API key
    }
    
    response = requests.get(url, params=params)
    news_data = response.json()
    
    # Process and save news data to your database
    # ...
    
    return JsonResponse({'status': 'success', 'message': 'News fetched successfully'})