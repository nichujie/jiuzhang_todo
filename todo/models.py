from django.db import models

# Create your models here.

class Todo(models.Model):
    def __str__(self):
        return self.title

    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=64, default='')
    content = models.CharField(max_length=256, default='')
    status = models.IntegerField(default=0)
    priority = models.IntegerField(default=0)