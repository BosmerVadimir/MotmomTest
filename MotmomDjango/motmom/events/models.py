import datetime

from django.db import models
from django.utils import timezone


class Events(models.Model):
    name = models.CharField(max_length=1000)
    ins_time = models.CharField(max_length=1000)

    def __str__(self):
        return self.name

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
