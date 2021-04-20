from apiPy.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path(r'addnewuser/$', views.addNewUser),
    path('addnewuser/', views.addNewUser),
]