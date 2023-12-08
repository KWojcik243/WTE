from .models import Meal, Category, Ingredient
from .serializers import MealSerializer, IngredientSerializer, MealNameSerializer
from django.http import JsonResponse
import random

def meals(request):
    if request.method == 'GET':
        meals = Meal.objects.all()
        serializer = MealSerializer(meals, many=True)
        return JsonResponse(serializer.data, safe=False)
    
def random_meal(request, category_request):
    if request.method == 'GET':
        category = Category.objects.get(name=category_request)
        meals = Meal.objects.filter(category=category)
        random_meal = random.choice(meals)
        serializer_ingredients = IngredientSerializer(Ingredient.objects.filter(meal=random_meal), many=True)
        response_data = {
            'meal_name': random_meal.name,
            'meal_category': category.name,
            'meal_ingredients': serializer_ingredients.data,
        }
        return JsonResponse(response_data, safe=False)
    
def random_meals(request, categories_request):
    if request.method == 'GET':
        categories = categories_request.split(',')
        categories = Category.objects.filter(name__in=categories)
        random_meals = []
        ingredients ={}
        for category in categories:
            meals_in_category = Meal.objects.filter(category=category)
            random_meal = random.choice(meals_in_category)
            serializer_ingredients = IngredientSerializer(Ingredient.objects.filter(meal=random_meal), many=True)
            random_meals.append({'meal_name':random_meal.name,
                   'meal_category': category.name,
                   'meal_ingredients': list(map(lambda item: item['name'], serializer_ingredients.data))})
            
        return JsonResponse(random_meals, safe=False)
