import requests
from django.utils.text import slugify
from .models import Article
from django.contrib.auth.models import User

# Fetch the latest news from NewsAPI and create Article objects
# This function is called in the admin panel to fetch news
def fetch_latest_news():
    url = 'https://newsapi.org/v2/top-headlines'
    params = {
        'sources': 'bbc-news,cnn,reuters',
        'apiKey': 'a4e5c2ad9a564f55b74c6308aaee5824'
    }

    response = requests.get(url, params=params)
    data = response.json()

    # Check for NewsAPI errors
    if data.get("status") != "ok":
        raise Exception(f"NewsAPI Error: {data.get('message', 'Unknown error')}")

    articles = data.get('articles')
    if not articles:
        raise Exception("No 'articles' key in NewsAPI response or it is empty.")

    # default author
    try:
        default_author = User.objects.get(username="Sultana")
    except User.DoesNotExist:
        raise ValueError("Default author user 'Sultana' does not exist.")
    
    # skip articles with no title
    created_count = 0
    for item in articles:
        title = item.get('title')
        if not title:
            continue  
    # skip duplicates
        slug = slugify(title)
        if Article.objects.filter(slug=slug).exists():
            continue  
        
        content = item.get('content') or item.get('description') or "No content provided."
        excerpt = item.get('description', '')[:250]

        Article.objects.create(
            title=title,
            slug=slug,
            content=content,
            author=default_author,
            excerpt=excerpt,
            status=1,
            url=item.get('url')
        )
        created_count += 1

    print(f"Created {created_count} new articles.")
    return created_count 
