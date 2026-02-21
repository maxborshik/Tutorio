from django.db import models
from django.contrib.auth.models import AbstractUser

# Student model extending AbstractUser to include profile picture and subjects enrolled in.
class Student(AbstractUser):

    profile_picture = models.URLField(blank=True, null=True)
    subjects = models.ManyToManyField('Subject', through='Enrollment')

    def __str__(self):
        return self.username

# Subject model representing a course specific to an exam board.
# Unique constraint on name and exam board allow the same subject name to be used across different exam boards i.e "Mathematics" for AQA and Edexcel.
class Subject(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    exam_board = models.CharField(max_length=50)
    key_stage = models.CharField(max_length=50)
    description = models.TextField()
    icon = models.URLField()
    course_duration = models.DurationField(blank=True, null=True)
    is_published = models.BooleanField(default=False)

    modules = models.ManyToManyField('Module', through='SubjectModule')

    class Meta:
            constraints = [
                models.UniqueConstraint(
                    fields=['name', 'exam_board'], 
                    name='unique_subject_per_board'
                ),
                models.UniqueConstraint(
                    fields=['slug', 'exam_board'], 
                    name='unique_slug_per_board'
                )
            ]
            
    def __str__(self):
        return f"{self.name} ({self.exam_board})"
    
# Module model representing specific topics within subjects.
# Unique constraint allows the same module name to be used accross different exam boards, as certain topics are covered differently depending on the exam board.
class Module(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    exam_board = models.CharField(max_length=50)
    key_stage = models.CharField(max_length=50)
    description = models.TextField()
    icon = models.URLField()
    is_published = models.BooleanField(default=False)

    class Meta:
            constraints = [
                models.UniqueConstraint(
                    fields=['name', 'exam_board'], 
                    name='unique_subject_per_board'
                ),
                models.UniqueConstraint(
                    fields=['slug', 'exam_board'], 
                    name='unique_slug_per_board'
                )
            ]
            
    def __str__(self):
        return f"{self.name} ({self.exam_board})"

# ModuleSubtopic model representing specific subtopics within modules, as certain modules are quite broad, we want to allow revision even if the student is halfway through a module.
class ModuleSubtopic(models.Model):
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name='subtopics')
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    description = models.TextField()
    order = models.PositiveIntegerField()

    class Meta:
        unique_together = ('module', 'name')
        ordering = ['order']

# The through model storing which student is enrolled in which subjects.
# Also includes additional info on their progress and performance on the subject as a whole.
class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)

    enrollment_date = models.DateTimeField(auto_now_add=True)
    last_studied = models.DateTimeField(blank=True, null=True)
    current_grade = models.CharField(max_length=16, blank=True, null=True)
    target_grade = models.CharField(max_length=16, blank=True, null=True)
    completion_percentage = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    is_active = models.BooleanField(default=True)

    class Meta:
        unique_together = ('student', 'subject')



# The through model allowing multiple modules to be associated with multiple subjects.
# The order field specifies the progression of modules within a subject, and the difficulty field tracks the relative difficulty of each module within the subject.
class SubjectModule(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    order = models.PositiveIntegerField()
    difficulty = models.IntegerField(default=1, choices=[(i, i) for i in range(1, 10)])

    class Meta:
        unique_together = ('subject', 'module')
        ordering = ['order']


# Skill model represents the specific skills that a question might test. These skills will be tracked for each student to spot weaknesses and suggest revision topics.
# The category field allows us to group similar skills together.
class Skill(models.Model):
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)
    category = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name

# Question model represents the questions that will be presented, each question can be associated with multiple modules and skills.
class Question(models.Model):
    modules = models.ManyToManyField(Module, related_name='module_questions')
    skills = models.ManyToManyField(Skill, related_name='skill_questions')

    id = models.AutoField(primary_key=True)
    question_text = models.TextField()
    mark_scheme = models.TextField(blank=True, null=True)
    answer_text = models.TextField()
    image = models.URLField(blank=True, null=True)
    difficulty = models.IntegerField(default=1, choices=[(i, i) for i in range(1, 10)])
    is_published = models.BooleanField(default=False)

    def __str__(self):
        return f"Question {self.id} - {self.question_text[:50]}..."

# SkillMastery model tracks the mastery level of each skill for each student, allowing for personalised revision recommendations.
class SkillMastery(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
    mastery_score = models.FloatField(default=0.0) 
    last_updated = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('student', 'skill')

# ModuleMastery tracks the mastery level of each module for each student, allowing for personalised revision recommendations at the module level
# Also allows tracking progress through the course as a whole.
class ModuleMastery(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    mastery_score = models.FloatField(default=0.0)
    last_updated = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('student', 'module')

# QuestionAttempt model tracks each attempt a student makes at a question.
class QuestionAttempt(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    response = models.TextField()
    response_image = models.URLField(blank=True, null=True)
    attempt_date = models.DateTimeField(auto_now_add=True)
    is_correct = models.BooleanField()
    time_taken = models.DurationField()
    attempt_number = models.PositiveIntegerField()

# AIInteraction model tracks the interactions between the student and the AI tutor for any questions the student chooses to ask for help with.
# This allows us to track the effectiveness of the AI tutor at the skill, module and subject level, and to identify any areas the AI tutor needs improvement on.
class AIInteraction(models.Model):
    attempt = models.ForeignKey(QuestionAttempt, on_delete=models.CASCADE, related_name='ai_interactions')
    timestamp = models.DateTimeField(auto_now_add=True)
    prompt = models.TextField()
    response = models.TextField()

    class Meta:
        ordering = ['timestamp']