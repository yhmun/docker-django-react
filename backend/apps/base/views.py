from rest_framework.permissions import AllowAny
from rest_framework import viewsets, filters
from .serializers import StudentSerializer
from .models import Student

class StudentView(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [AllowAny]
    filter_backends = (filters.OrderingFilter, )
    ordering_fields = ('id', )
