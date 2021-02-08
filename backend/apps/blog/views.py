from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]
