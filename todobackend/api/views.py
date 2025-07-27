from django.shortcuts import render
from .models import item
from .serializers import ItemSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

@api_view(['GET', 'PUT', 'DELETE'])
def itembyid(request, id):
    try:
        items = item.objects.get(id=id)
    except item.DoesNotExist:
        return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ItemSerializer(items)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == 'PUT':
        serializer = ItemSerializer(items, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        items.delete()
        return Response('item deleted successfully', status=status.HTTP_204_NO_CONTENT)
    

@api_view(['GET','POST'])
def get_or_post_item(request):
    print(request.data)
    if request.method=='GET':
        items = item.objects.all()
        serializer = ItemSerializer(items,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    if request.method=='POST':
        serializer = ItemSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['PUT'])
# def edititem(request,id):
#     items = item.objects.get(id=id)
#     serializer = ItemSerializer(items,data=request.data)
#     if(serializer.is_valid()):
#         serializer.save()
#         return Response(serializer.data,status=status.HTTP_200_OK)
    
# @api_view(['DELETE'])
# def deleteitem(request,id):
#     items = item.objects.get(id=id)
#     items.delete()
#     return Response('item deleted successfully',status=status.HTTP_204_NO_CONTENT)