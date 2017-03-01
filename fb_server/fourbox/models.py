from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.conf import settings


# Create your models here.
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    """
     generate token when new user is created
    """
    if created:
        Token.objects.create(user=instance)


# Create your models here.
class Doc(models.Model):
    content = models.TextField(default='no found doc')
    # 0 草稿 1 发布 2 删除
    status = models.IntegerField(default=0)
    date = models.DateTimeField(auto_now_add=True)
    week_num = models.IntegerField(default=0)
    Staff = models.ForeignKey(User, blank=True, null=True, related_name="staff")
