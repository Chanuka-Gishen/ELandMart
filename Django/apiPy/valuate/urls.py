from apiPy.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('city/<city>', views.getCity, name="city"),
]