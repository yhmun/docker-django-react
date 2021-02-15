from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from .models import Article, Category, Comment
from .serializers import ArticleSerializer, CategorySerializer, CommentSerializer

class ArticleView(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [AllowAny]

class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]

class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [AllowAny]
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ('article', )
