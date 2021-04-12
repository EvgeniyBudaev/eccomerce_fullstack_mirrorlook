from django.urls import path

from . import views


urlpatterns = [
  path('', views.get_routes, name="routes"),
  path('categories/', views.get_categories, name="categories"),
  path('products/', views.get_products, name="products"),
  path('products/<str:pk>/', views.get_product, name="product"),
  path('categories/<slug:category_slug>/', views.get_products_by_category, name='products_by_category'),
  path('categories/<slug:category_slug>/<slug:product_slug>/', views.get_product_by_category, name='product_by_category'),
  path('users/profile/', views.getUserProfile, name="users-profile"),
  path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]