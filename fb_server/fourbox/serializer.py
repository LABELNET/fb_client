from django.contrib.auth.models import User
from rest_framework import serializers

from fourbox.models import Doc


# staff
class FbStaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class FbDocSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doc
        fields = '__all__'
