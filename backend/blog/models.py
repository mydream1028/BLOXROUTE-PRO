from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Keyword(models.Model):
    word = models.CharField("word", max_length=100, primary_key=True)

    def __str__(self):
        return self.word


class Blog(models.Model):
    postId = models.BigAutoField(primary_key=True)
    authorId = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField("title", max_length=100)
    content = models.TextField("content", max_length=1000)
    keyword = models.ManyToManyField(Keyword)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
