from rest_framework.permissions import AllowAny
from rest_framework import status, viewsets, filters
from rest_framework.response import Response
from .serializers import StudentSerializer, AppointmentSerializer
from .models import Student, Appointment

class CreateListModelMixin(object):
    def create(self, request, *args, **kwargs):
        data = request.data
        if isinstance(data, list):
            serializer = self.get_serializer(data=request.data, many=True)
        else:
            serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED,
                    headers=headers)

class StudentView(CreateListModelMixin, viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [AllowAny]
    filter_backends = (filters.OrderingFilter, )
    ordering_fields = ('id', )

class AppointmentView(CreateListModelMixin, viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [AllowAny]
    filter_backends = (filters.OrderingFilter, )
    ordering_fields = ('id', )
