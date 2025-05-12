"""from . import views
from django.urls import path

urlpatterns = [
    path('', views.ArticleList.as_view(), name='home'),
]
"""
from . import views
from django.urls import path

urlpatterns = [
    path('', views.ArticleList.as_view(), name='home'),
    path('article/<slug:slug>/', views.ArticleDetail.as_view(), name='article_detail'),
    path('like/<slug:slug>/', views.article_like, name='article_like'),
    path('dislike/<slug:slug>/', views.article_dislike, name='article_dislike'),
    path('article/<slug:slug>/comment/', views.add_comment, name='add_comment'),
]