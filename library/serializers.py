from rest_framework import serializers
from library.models import Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ["id", "name", "annotation", "author", "genres"]
