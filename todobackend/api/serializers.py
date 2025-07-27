from .models import item
from rest_framework import serializers
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = item
        fields = '__all__'