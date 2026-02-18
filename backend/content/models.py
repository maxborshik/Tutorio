from django.db import models

class Student(models.Model):
    username = models.CharField(max_length=25, unique=True, primary_key=True)
    first_name = models.CharField(max_length=25)
    email = models.EmailField(unique=True)
    subjects = models.ManyToManyField('Subject', through='Enrollment')

class Subject(models.Model):
    subject_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    icon = models.URLField()

class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    enrollment_date = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    current_grade = models.CharField(max_length=2, blank=True, null=True)

    class Meta:
        unique_together = ('student', 'subject')