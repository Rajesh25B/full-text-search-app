from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=79)
    description = models.TextField()
    
    class Meta:
        db_table = 'posts'
        ordering = ['-title']

    def __str__(self):
        return self.title
