from . import views
from django.urls import path

urlpatterns = [
    path('', views.ArticleList.as_view(), name='home'),
    path('post/<slug:slug>/', views.post_detail, name='post_detail'),
    path('fetch-news/', views.fetch_news, name='fetch_news'),
    path('<slug:slug>/like/', views.like_article, name='like_article'),
    path('<slug:slug>/dislike/', views.dislike_article, name='dislike_article'),
    path('post/<slug:slug>/edit_comment/<int:comment_id>', views.edit, name='edit'),
    #path('<slug:slug>/edit_comment/<int:comment_id>', views.edit, name='edit'),
    path('post/<slug:slug>/delete_comment/<int:comment_id>', views.delete_comment, name='delete_comment'),
]