from django.db import models

# Create your models here.

class Locality(models.Model):
    name = models.CharField(max_length=150)

    def __str__(self):
        return self.name