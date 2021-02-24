from rest_framework import serializers
from .models import Student, Appointment

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'name', 'email', 'document', 'phone', 'registered_on')

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ('id', 'petName', 'ownerName', 'aptNotes', 'aptDate')
