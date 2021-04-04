from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status

from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


# Create your views here.


@api_view(['GET'])
def get_routes(request):
  routes = [
    '/api/categories/',
    '/api/categories/<slug>/',
    '/api/categories/<slug>/products/',
    '/api/categories/<slug:category_slug>/',

    '/api/products/',
    '/api/products/create/',

    '/api/products/upload/',

    '/api/products/<id>/reviews/',

    '/api/products/top/',
    '/api/products/<id>/',

    '/api/products/delete/<id>/',
    '/api/products/<update>/<id>/',
  ]
  return Response(routes)


@api_view(['GET'])
def get_products(request):
  products = Product.objects.all()
  serializer = ProductSerializer(products, many=True)  # установив many=True , вы сообщаете drf, что queryset содержит несколько элементов (список элементов), поэтому drf должен сериализовать каждый элемент с помощью класса serializer (и serializer.data будет списком). если вы не зададите этот аргумент, это означает, что queryset-это один экземпляр, а serializer.data - один объект)
  return Response(serializer.data)


@api_view(['GET'])
def get_product(request, pk):
  product = Product.objects.get(id=pk)
  serializer = ProductSerializer(product, many=False)
  return Response(serializer.data)


@api_view(['GET'])
def get_categories(request):
  categories = Category.objects.all()
  serializer = CategorySerializer(categories, many=True)
  return Response(serializer.data)


@api_view(['GET'])
def get_category(request, category_slug):
  category = Category.objects.get(slug=category_slug)
  serializer = CategorySerializer(category, many=False)
  return Response(serializer.data)




