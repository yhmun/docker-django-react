from rest_framework import serializers
from . import models

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Article
        fields = ('id', 'title', 'content', 'created_at', 'updated_at', 'categories', 'up_votes')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = ('id', 'name')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = ('id', 'author', 'content', 'created_at', 'article')
