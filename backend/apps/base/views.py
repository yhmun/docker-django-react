from django.shortcuts import render
from rest_framework import viewsets
from .serializers import StudentSerializer
from .models import Student

class StudentView(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()
