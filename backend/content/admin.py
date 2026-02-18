from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Student, Subject, Module, SubjectModule, Skill, Question, QuestionAttempt, AIInteraction, Enrollment

# 1. Inline for Subject-Module ordering
class SubjectModuleInline(admin.TabularInline):
    model = SubjectModule
    extra = 1

# 2. Subject Admin with Module Management
@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'key_stage', 'is_published')
    prepopulated_fields = {'slug': ('name',)}
    inlines = [SubjectModuleInline]

# 3. Module Admin
@admin.register(Module)
class ModuleAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_published')
    prepopulated_fields = {'slug': ('name',)}

# 4. Question Admin (Scalable view)
@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('id', 'difficulty', 'is_published')
    list_filter = ('difficulty', 'is_published', 'modules')
    search_fields = ('question_text',)

# 5. Student Admin (Inherits from UserAdmin for security)
@admin.register(Student)
class StudentAdmin(UserAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff')
    # Add your custom 'subjects' field to the detail view
    fieldsets = UserAdmin.fieldsets + (
        ('Tutorio Info', {'fields': ('subjects',)}),
    )

# Register the remaining models simply
admin.site.register(Skill)
admin.site.register(Enrollment)
admin.site.register(QuestionAttempt)
admin.site.register(AIInteraction)