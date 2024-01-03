
from rest_framework import serializers
from .models import Category, Meal, Ingredient
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
class CategorySerializer(serializers.ModelSerializer):
    item = serializers.CharField(source='name')
    class Meta:
        model = Category
        fields = ('id',  'item')