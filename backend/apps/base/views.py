from rest_framework.permissions import AllowAny
from rest_framework import viewsets, filters
from .serializers import StudentSerializer, AppointmentSerializer
from .models import Student, Appointment

class StudentView(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [AllowAny]
    filter_backends = (filters.OrderingFilter, )
    ordering_fields = ('id', )

class AppointmentView(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [AllowAny]
    filter_backends = (filters.OrderingFilter, )
    ordering_fields = ('id', )
