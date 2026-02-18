from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Student, Subject, Module, SubjectModule, Skill, Question, QuestionAttempt, AIInteraction, Enrollment

class EnrollmentInline(admin.TabularInline):
    model = Enrollment
    extra = 1

class SubjectModuleInline(admin.TabularInline):
    model = SubjectModule
    extra = 1

@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'key_stage', 'is_published')
    prepopulated_fields = {'slug': ('name',)}
    inlines = [SubjectModuleInline]

@admin.register(Module)
class ModuleAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_published')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('id', 'difficulty', 'is_published')
    list_filter = ('difficulty', 'is_published', 'modules')
    search_fields = ('question_text',)

@admin.register(Student)
class StudentAdmin(UserAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff')
    inlines = [EnrollmentInline]

admin.site.register(Skill)
admin.site.register(Enrollment)
admin.site.register(QuestionAttempt)
admin.site.register(AIInteraction)