from django.db import models
from django.conf import settings
from django.utils import timezone

from dorayaki.api.thread.models import Thread

class Comment(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    thread = models.ForeignKey(Thread, on_delete=models.PROTECT)
    parent = models.ForeignKey('self', on_delete=models.PROTECT, blank=True, null=True)
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)