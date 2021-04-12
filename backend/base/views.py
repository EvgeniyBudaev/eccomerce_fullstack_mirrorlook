from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django_filters.rest_framework import DjangoFilterBackend


from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer, UserSerializer, UserSerializerWithToken


# Create your views here.


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
  def validate(self, attrs):
    data = super().validate(attrs)

    serializer = UserSerializerWithToken(self.user).data
    for k, v in serializer.items():
      data[k] = v

    return data


class MyTokenObtainPairView(TokenObtainPairView):
  serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def registerUser(request):
  data = request.data
  try:
    user = User.objects.create(
      first_name=data['name'],
      username=data['email'],
      email=data['email'],
      password=make_password(data['password'])
    )
    serializer = UserSerializerWithToken(user, many=False)
    return Response(serializer.data)
  except:
    message = {'detail': 'User with this email already exists'}
    return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
  user = request.user
  serializer = UserSerializer(user, many=False)
  return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
  users = User.objects.all()
  serializer = UserSerializer(users, many=True)
  return Response(serializer.data)


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
def get_products_by_category(request, category_slug):
  category = None
  products = Product.objects.all()
  if category_slug:
    category = Category.objects.get(category_slug=category_slug)
    productsAfterFilter = products.filter(category_id=category.id)
  serializer = ProductSerializer(productsAfterFilter, many=True)

  return Response(serializer.data)


@api_view(['GET'])
def get_product_by_category(request, category_slug, product_slug):
  product = None

  if category_slug and product_slug:
    product = Product.objects.get(product_slug=product_slug)
  serializer = ProductSerializer(product, many=False)

  return Response(serializer.data)




