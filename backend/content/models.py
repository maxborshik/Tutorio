from django.db import models
from django.contrib.auth.models import AbstractUser

class Student(AbstractUser):
    subjects = models.ManyToManyField('Subject', through='Enrollment')

    def __str__(self):
        return self.username

class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    enrollment_date = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    current_grade = models.CharField(max_length=16, blank=True, null=True)
    target_grade = models.CharField(max_length=16, blank=True, null=True)
    exam_board = models.CharField(max_length=50, blank=True, null=True)
    last_accessed = models.DateTimeField(auto_now=True)
    completion_percentage = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)

    class Meta:
        unique_together = ('student', 'subject')

class Subject(models.Model):
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)
    description = models.TextField()
    icon = models.URLField()
    key_stage = models.CharField(max_length=50)
    is_published = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class Module(models.Model):
    subject = models.ManyToManyField(Subject, related_name='modules')
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)
    description = models.TextField()
    icon = models.URLField()
    key_stage = models.CharField(max_length=50)
    is_published = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class Question(models.Model):
    id = models.AutoField(primary_key=True)
    module = models.ManyToManyField(Module, related_name='questions')
    subject = models.ManyToManyField(Subject, related_name='questions')
    question = models.TextField()
    answer = models.TextField()
    image = models.URLField(blank=True, null=True)
    mark_scheme = models.TextField(blank=True, null=True)
    is_published = models.BooleanField(default=False)

    def __str__(self):
        return f"Question {self.id} - {self.question[:50]}..."

class QuestionAttempt(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    attempt_date = models.DateTimeField(auto_now_add=True)
    is_correct = models.BooleanField()
    time_taken = models.DurationField()


class AIInteraction(models.Model):
    attempt = models.ForeignKey(QuestionAttempt, on_delete=models.CASCADE, related_name='ai_interactions')
    timestamp = models.DateTimeField(auto_now_add=True)
    prompt = models.TextField()
    response = models.TextField()

    class Meta:
        ordering = ['timestamp']

class Skill(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    category = models.CharField(max_length=255)
    description = models.TextField()
    related_subjects = models.ManyToManyField(Subject, related_name='skills')

    def __str__(self):
        return self.name