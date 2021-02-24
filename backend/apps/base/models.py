from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    document = models.CharField(max_length=20)
    phone = models.CharField(max_length=20)
    registered_on = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name

class Appointment(models.Model):
    petName = models.CharField(max_length=255)
    ownerName = models.CharField(max_length=255)
    aptNotes = models.TextField()
    aptDate = models.DateTimeField()

    def __str__(self):
        return self.petName
