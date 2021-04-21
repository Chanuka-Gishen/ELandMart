from rest_framework import serializers
from user.models import UserDetails
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = (
            'user_name',
            'user_email',
            'user_password',
            'user_mobileNo'
        )
        extra_kwargs = {'user_password': {'write_only': True, 'required': True}}
        
    def create(self, validated_data):
        user = UserDetails.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user