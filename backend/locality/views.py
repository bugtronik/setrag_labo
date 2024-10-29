from django.shortcuts import render
from rest_framework import viewsets
from locality.models import Locality
from locality.serializers import LocalitySerializer

class LocalityViewSet(viewsets.ModelViewSet):
    queryset = Locality.objects.all()
    serializer_class = LocalitySerializer
