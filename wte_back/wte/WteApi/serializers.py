
from rest_framework import serializers
from .models import Meal, Ingredient
class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = '__all__'
class MealNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = ('name',)
    def to_representation(self, instance):
        return instance.name
        
class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('name',)