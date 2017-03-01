from rest_framework import serializers

from fourbox.models import MakeDoc


class FbDocSerializer(serializers.ModelSerializer):
    class Meta:
        model = MakeDoc
        fields = '__all__'
