from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator

from events.models import Events


class EventDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = [
            'id',
            'name',
            'ins_time',
        ]
        validators = [UniqueTogetherValidator(queryset=Events.objects.all(), fields=('name', 'ins_time'))]

    def create(self, validated_data):
        print('\n\n in serializer create')
        return super().create(validated_data)

    def perform_create(self, serializer):
        print('\n\n in serializer perform_create')
        return super().perform_create(serializer)
