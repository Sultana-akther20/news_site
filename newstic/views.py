from django.shortcuts import render, get_object_or_404, redirect, reverse
from django.http import JsonResponse
from django.views import generic
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .news_fetcher import fetch_latest_news
from .models import Article, Comment
from .forms import Form
from django.views.decorators.http import require_GET
from django.contrib.auth.decorators import user_passes_test
from django.http import HttpResponseRedirect
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import authenticate, login

# Create your views here.
class ArticleList(LoginRequiredMixin, generic.ListView ):
    model = Article
    queryset = Article.objects.filter(status=1)
    template_name = "newstic/index.html"
    paginate_by = 3
    login_url = '/accounts/login/'  

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
        print("Error fetching news:", e)
        return JsonResponse({'status': 'error', 'message': str(e)})


def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('home')  # or your desired redirect
        else:
            messages.error(request, 'Your username or password is incorrect.')
            return redirect('login')  # redirect back to login page
    return render(request, 'login.html')

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

def edit(request, slug, comment_id):
    """
    view to edit comments
    """
    if request.method == "POST":

        queryset = Article.objects.filter(status=1)
        post = get_object_or_404(queryset, slug=slug)
        comment = get_object_or_404(Comment, pk=comment_id)
        comment_form = Form(data=request.POST, instance=comment)

        if comment_form.is_valid() and comment.author == request.user:
            comment = comment_form.save(commit=False)
            comment.post = post
            comment.approved = False
            comment.save()
            messages.add_message(request, messages.SUCCESS, 'Comment Updated!')
        else:
            messages.add_message(request, messages.ERROR, 'Error updating comment!')
    
    return HttpResponseRedirect(reverse('post_detail', args=[slug]))


def delete_comment(request, slug, comment_id):
    """
    view to delete comment
    """
    queryset = Article.objects.filter(status=1)
    post = get_object_or_404(queryset, slug=slug)
    comment = get_object_or_404(Comment, pk=comment_id)

    if comment.author == request.user:
        comment.delete()
        messages.add_message(request, messages.SUCCESS, 'Comment deleted!')
    else:
        messages.add_message(request, messages.ERROR, 'You can only delete your own comments!')

    return HttpResponseRedirect(reverse('post_detail', args=[slug]))