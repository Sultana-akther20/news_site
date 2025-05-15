from . import views
from django.urls import path

urlpatterns = [
    path('', views.ArticleList.as_view(), name='home'),
    path('post/<slug:slug>/', views.post_detail, name='post_detail'),
    #path('admin/fetch-news/', views.update_news, name='fetch_news'),
    path('fetch-news/', views.fetch_news, name='fetch_news'),
    path('<slug:slug>/like/', views.like_article, name='like_article'),
    path('<slug:slug>/dislike/', views.dislike_article, name='dislike_article'),
]