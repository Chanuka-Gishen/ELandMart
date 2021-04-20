from apiPy.urls import path
from . import views

urlpatterns = [
    path('addnewuser/',views.addUserApi),
]