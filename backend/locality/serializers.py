from rest_framework import serializers
from locality.models import Locality

class LocalitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Locality
        fields = ['name']