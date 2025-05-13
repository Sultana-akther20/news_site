from . import views
from django.urls import path

urlpatterns = [
    path('', views.ArticleList.as_view(), name='home'),
    path('<slug:slug>/', views.post_detail, name='post_detail'),
    path('admin/fetch-news/', views.update_news, name='fetch_news'),
]