import requests
from django.utils.text import slugify
from .models import Article
from django.contrib.auth.models import User

def fetch_latest_news():
    url = 'https://newsapi.org/v2/top-headlines'
    params = {
        'country': 'us',  # You can change this to 'gb', 'in', etc.
        'category': 'technology',  # Try 'general', 'business', etc.
        'apiKey': 'a4e5c2ad9a564f55b74c6308aaee5824'
    }

    response = requests.get(url, params=params)
    data = response.json()

    # Use your own default user for imported articles
    default_author = User.objects.first()

    for item in data['articles']:
        title = item['title']
        content = item.get('content') or item.get('description', '')
        excerpt = item.get('description', '')[:250]

        # Check if article already exists by slug
        slug = slugify(title)
        if not Article.objects.filter(slug=slug).exists():
            Article.objects.create(
                title=title,
                slug=slug,
                content=content or 'No content provided.',
                author=default_author,
                excerpt=excerpt,
                status=1
            )