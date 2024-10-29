from django.urls import path, include
from rest_framework import routers
from locality.views import LocalityViewSet

router = routers.DefaultRouter()
router.register(r'locality', LocalityViewSet)

urlpatterns = [
    path('', include(router.urls)),
]