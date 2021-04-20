from rest_framework import serializers
from user.models import UserDetails

def UserSerializer(serializers):
    class Meta:
        model = UserDetails
        fields = (
            'user_name',
            'user_email',
            'user_password',
            'user_mobileNo'
        )