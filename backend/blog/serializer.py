from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Blog

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username', 'email', 'id']


class BlogReadSerializer(serializers.ModelSerializer):
    author = UserSerializer(source='authorId', read_only=True)

    class Meta:
        model = Blog
        fields = ('postId', 'title', 'content', 'keyword', 'author', 'createdAt')


class BlogCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = ('postId', 'title', 'content', 'keyword', 'authorId')