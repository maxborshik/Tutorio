from django.shortcuts import render
from .models import Subject, Module, ModuleSubtopic, Student, Enrollment, SubjectModule, SubModuleMastery, QuestionAttempt
from .serializers import SubjectSerializer, ModuleSerializer, ModuleSubtopicSerializer, StudentSerializer, EnrollmentSerializer, SubjectModuleSerializer, ModuleSubtopicMasterySerializer
from rest_framework import viewsets