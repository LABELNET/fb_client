from rest_framework import serializers

from fourbox.models import Staff, Doc


# staff
class FbStaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = '__all__'


class FbDocSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doc
        fields = '__all__'
