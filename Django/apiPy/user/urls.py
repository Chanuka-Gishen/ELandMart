from apiPy.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('addnewuser/', views.addNewUser),
]