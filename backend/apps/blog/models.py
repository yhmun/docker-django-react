from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    categories = models.ManyToManyField('Category', blank=True)
    up_votes = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title

class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Comment(models.Model):
    author = models.CharField(max_length=60)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    article = models.ForeignKey('Article', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.author}, {self.content}"
