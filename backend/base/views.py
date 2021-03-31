from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status

from .models import Product
from .products import products
from .serializers import ProductSerializer


# Create your views here.


@api_view(['GET'])
def get_routes(request):
  routes = [
    '/api/categories/',

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
  product = Product.objects.get(_id=pk)
  serializer = ProductSerializer(product, many=False)
  return Response(serializer.data)
