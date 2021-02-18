from rest_framework.permissions import AllowAny
from rest_framework import viewsets, filters
from .serializers import TodoSerializer
from .models import Todo

class TodoView(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [AllowAny]
    filter_backends = (filters.OrderingFilter, )
    ordering_fields = ('id', )
