from django.db import models

class Student(models.Model):
    username = models.CharField(max_length=25, unique=True, primary_key=True)
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    email = models.EmailField(unique=True)
    subjects = models.ManyToManyField('Subject', through='Enrollment')
    date_joined = models.DateTimeField(auto_now_add=True)

class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    enrollment_date = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    current_grade = models.CharField(max_length=16, blank=True, null=True)
    target_grade = models.CharField(max_length=16, blank=True, null=True)
    exam_board = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        unique_together = ('student', 'subject')

class Subject(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)
    description = models.TextField()
    icon = models.URLField()
    key_stage = models.CharField(max_length=50)
    is_published = models.BooleanField(default=False)

class Module(models.Model):
    id = models.AutoField(primary_key=True)
    subject = models.ManyToManyField(Subject, related_name='modules')
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    description = models.TextField()
    icon = models.URLField()
    key_stage = models.CharField(max_length=50)
    is_published = models.BooleanField(default=False)

class Question(models.Model):
    id = models.AutoField(primary_key=True)
    module = models.ManyToManyField(Module, related_name='questions')
    subject = models.ManyToManyField(Subject, related_name='questions')
    question = models.TextField()
    answer = models.TextField()
    image = models.URLField(blank=True, null=True)
    mark_scheme = models.TextField(blank=True, null=True)
    is_published = models.BooleanField(default=False)

