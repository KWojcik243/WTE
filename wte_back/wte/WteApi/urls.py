from django.contrib import admin
from django.urls import path
from WteApi import views

urlpatterns = [
    path('meals/', views.meals),
    path('meal/<str:category_request>/', views.random_meal),
    path('meals/<str:categories_request>/', views.random_meals),
    path('categories/', views.categories),
]
