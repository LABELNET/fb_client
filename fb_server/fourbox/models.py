from django.db import models


class Staff(models.Model):
    cn_name = models.CharField(max_length=15)
    en_name = models.CharField(max_length=30)


# Create your models here.
class Doc(models.Model):
    content = models.TextField(default='no found doc')
    # 0 草稿 1 发布 2 删除
    status = models.IntegerField(default=0)
    date = models.DateTimeField(auto_now_add=True)
    week_num = models.IntegerField(default=0)
    Staff = models.ForeignKey(Staff, blank=True, null=True, related_name="staff")
