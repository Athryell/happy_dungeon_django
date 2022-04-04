from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    pass

class Tags(models.Model):
    name = models.CharField(max_length=16)

    def __str__(self):
        return f'{self.pk} - {self.name}'
    

class Automa_boardgames(models.Model):
    is_ready = models.BooleanField()
    title = models.CharField(max_length=32)
    short = models.CharField(max_length=32, default=title)
    image = models.ImageField(upload_to="automa/games_cover", null=True, blank=True)
    tags = models.ManyToManyField('Tags', related_name='boardgames')
    size = models.CharField(max_length=8)

    def __str__(self):
        return f'{self.title} ({self.short_title}) - {self.is_ready}'

    def serialize(self):
        tag_list = []
        for t in self.tags.all():
            tag_list.append(t.name)

        return {
            'title': self.title,
            'short_title': self.short_title,
            'tags': tag_list,
            'size': self.size,
            'ready': self.is_ready
        }
    