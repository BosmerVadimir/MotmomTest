from rest_framework import viewsets

from events.models import Events
from events.serializers import EventDetailSerializer


class InsertViewSet(viewsets.ModelViewSet):
    print('\n\n-----in constructor of InsertViewSet\n\n')
    queryset = Events.objects.all()
    serializer_class = EventDetailSerializer
    lookup_field = 'id'

    def create(self, request, *args, **kwargs):
        print('\n\n-----in create: \n\n' + str(request))
        return super().create(request, *args, **kwargs)
