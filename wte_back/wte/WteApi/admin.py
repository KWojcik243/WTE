from django.contrib import admin
from .models import User, Meal, Category, Ingredient

# Register your models here.
admin.site.register(User)
admin.site.register(Meal)
admin.site.register(Category)
admin.site.register(Ingredient)
