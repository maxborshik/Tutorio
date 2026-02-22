from .models import Student, Subject, Module, Enrollment, SubjectModule, AIInteraction, Question, Skill, SkillMastery, ModuleMastery, ModuleSubtopic, ModuleSubtopicMastery
from rest_framework import serializers

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'

class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = '__all__'

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'

class SubjectModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubjectModule
        fields = '__all__'

class AIInteractionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AIInteraction
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class SkillMasterySerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillMastery
        fields = '__all__'

class ModuleMasterySerializer(serializers.ModelSerializer):
    class Meta:
        model = ModuleMastery
        fields = '__all__'

class ModuleSubtopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModuleSubtopic
        fields = '__all__'

class ModuleSubtopicMasterySerializer(serializers.ModelSerializer):
    class Meta:
        model = ModuleSubtopicMastery
        fields = '__all__'
