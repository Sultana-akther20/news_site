from django.contrib import admin
from .models import Article, Comment
from django_summernote.admin import SummernoteModelAdmin
from django.urls import path
from django.http import HttpResponseRedirect
from django.contrib.admin.views.decorators import staff_member_required
from django.utils.html import format_html
from django.urls import reverse
from .news_fetcher import fetch_latest_news


# Register your models here.
@admin.register(Article)
class ArticleAdmin(SummernoteModelAdmin):
    list_display = ('title', 'author', 'created_at', 'status', 'total_likes', 'total_dislikes')
    list_filter = ('status', 'created_at', 'author')
    search_fields = ('title', 'content')
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'created_at'
    summernote_fields = ('content',)
    
    fieldsets = (
        (None, {
            'fields': ('title', 'slug', 'content', 'excerpt', 'author', 'status')
        }),
        ('Advanced options', {
            'classes': ('collapse',),
            'fields': ('likes', 'dislikes')
        }),
    )

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'post', 'author', 'created_at', 'approved')
    list_filter = ('approved', 'created_at')
    search_fields = ('body',)

@staff_member_required
def fetch_news_view(request):
    fetch_latest_news()
    return HttpResponseRedirect("/admin/?news_fetched=true")

