from django.shortcuts import render, get_object_or_404
#from django.http import HttpResponse
from django.views import generic
from .models import Article

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

    return render(
        request,
        "newstic/post_detail.html",
        {"post": post,
         "coders": "Sultana Akther"},

    )