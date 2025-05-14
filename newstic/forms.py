from django import forms
from .models import Comment

class Form(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('body',)
        widgets = {
            'body': forms.Textarea(attrs={'class': 'form-control', 'rows': 4, 'placeholder': 'Share your thoughts...'}),
        }
        labels = {
            'body': 'Comment',
        }