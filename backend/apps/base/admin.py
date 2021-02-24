from django.contrib import admin
from .models import Student, Appointment

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'document', 'phone', 'registered_on')

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('petName', 'ownerName', 'aptNotes', 'aptDate')
