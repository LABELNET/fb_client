from django.db import models


# Create your models here.
class MakeDoc(models.Model):
    content = models.TextField(default='no found doc')
    # 0 草稿 1 发布 2 删除
    status = models.IntegerField(default=0)
    date = models.DateTimeField(auto_now_add=True)
    week_num = models.IntegerField(default=0)
    user_name = models.CharField(max_length=15, default=None)
