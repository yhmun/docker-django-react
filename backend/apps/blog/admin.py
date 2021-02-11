from django.contrib import admin
from .models import Article, Category, Comment

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'created_at', 'updated_at', 'up_votes')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', )

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('content', 'created_at', 'article')
