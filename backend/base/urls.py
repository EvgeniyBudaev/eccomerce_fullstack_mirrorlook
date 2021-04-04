from django.urls import path

from . import views


urlpatterns = [
  path('', views.get_routes, name="routes"),
  path('categories/', views.get_categories, name="categories"),
  path('products/', views.get_products, name="products"),
  path('products/<str:pk>/', views.get_product, name="product"),
  path('categories/<slug:category_slug>/', views.get_products_by_category, name='products_by_category'),
]