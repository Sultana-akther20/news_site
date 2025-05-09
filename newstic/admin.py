from django.contrib import admin
from .models import Article, Comment

# Register your models here.
admin.site.register(Article)
admin.site.register(Comment)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_at', 'status', 'total_likes', 'total_dislikes')
    list_filter = ('status', 'created_at', 'author')
    search_fields = ('title', 'content')
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'created_at'
    