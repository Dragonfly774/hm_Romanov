from django.shortcuts import render
from library.models import Book
from library.serializers import BookSerializer
from rest_framework import viewsets

# Create your views here.
"""обработка входящих запросов"""


class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
