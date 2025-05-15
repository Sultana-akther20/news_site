from django.shortcuts import render, get_object_or_404,redirect
from django.http import HttpResponse, JsonResponse
from django.views import generic
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .news_fetcher import fetch_latest_news
import requests 
from .models import Article
from .forms import Form
from django.views.decorators.http import require_GET
from django.contrib.auth.decorators import user_passes_test
# Create your views here.
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

    if request.method == "POST":
         if not request.user.is_authenticated:
            messages.error(request, "You must be logged in to comment.")
            return redirect("login")
    form = Form(data=request.POST)
    if form.is_valid():
        comment = form.save(commit=False)
        comment.author = request.user
        comment.post = post
        comment.save()
        messages.success(request, "Your comment was posted successfully.")
        return redirect("post_detail", slug=slug)

    return render(
        request,
        "newstic/post_detail.html",
        {"post": post,
        "comments": comments,
        "comment_count": comment_count,
        "form": form,
        },

    )

#@staff_member_required
#def update_news(request):
 #   fetch_latest_news()
  #  return HttpResponse("News updated successfully.")

#@staff_member_required
#def fetch_news(request):
    #"""Admin view to fetch latest news from an API"""
    # Here you could use your fetch_latest_news function
   # url = 'https://newsapi.org/v2/top-headlines'
    #import os
    #api_key = os.getenv("NEWS_API_KEY")
    #if not api_key:
     #   return JsonResponse({'status': 'error', 'message': 'API key not found'}, status=500)

    #url = 'https://newsapi.org/v2/top-headlines'
    #params = {
     #   'sources': 'bbc-news,cnn,reuters',
      #  'apiKey': api_key
    
    #}
    
    #response = requests.get(url, params=params)
    #news_data = response.json()
    
    # You can now save news_data to the database
    
    #return JsonResponse({'status': 'success', 'message': 'News fetched successfully'})
@user_passes_test(lambda u: u.is_superuser)
@require_GET
def fetch_news(request):
    try:
        created_count = fetch_latest_news()
        return JsonResponse({
            'status': 'success',
            'message': f'News fetched successfully. {created_count} new article(s) added.'
        })
    except Exception as e:
        print("❌ Error fetching news:", e)
        return JsonResponse({'status': 'error', 'message': str(e)}, status=500)


@login_required
def like_article(request, slug):
    article = get_object_or_404(Article, slug=slug)
    user = request.user
    if user in article.dislikes.all():
        article.dislikes.remove(user)
    if user in article.likes.all():
        article.likes.remove(user)
    else:
        article.likes.add(user)
    return redirect('post_detail', slug=slug)

@login_required
def dislike_article(request, slug):
    article = get_object_or_404(Article, slug=slug)
    user = request.user
    if user in article.likes.all():
        article.likes.remove(user)
    if user in article.dislikes.all():
        article.dislikes.remove(user)
    else:
        article.dislikes.add(user)
    return redirect('post_detail', slug=slug)