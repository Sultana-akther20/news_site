from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

# Create your models here.

class Article(models.Model):
    STATUS_CHOICES = (
        (0, 'Draft'),
        (1, 'Published'),
    )
    
    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=250, unique=True, blank=True)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='articles')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.IntegerField(choices=STATUS_CHOICES, default=0)
    likes = models.ManyToManyField(User, related_name='liked_articles', blank=True)
    dislikes = models.ManyToManyField(User, related_name='disliked_articles', blank=True)
    excerpt = models.TextField(blank=True)  
    updated_at = models.DateTimeField(auto_now=True)

    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
    
    def total_likes(self):
        return self.likes.count()
    
    def total_dislikes(self):
        return self.dislikes.count()
    
class Comment(models.Model):
    post = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='commenters')
    body = models.TextField()
    approved = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"Comment by {self.author.username} on {self.post.title}"
    
