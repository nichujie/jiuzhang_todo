from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'content', 'status', 'priority', 'created_at', 'expire_date')

    def validate_expire_date(self, value):
        print('Checking expiring date!')
        if False:
            raise serializers.ValidationError("")
        return value