from django.core.paginator import Paginator
from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Blog, Keyword
from .serializer import *

data = Blog.objects.all()


def search(request):
    keywords = request.GET.get('keyword', '')
    keyword_list = [keyword.strip() for keyword in keywords.split() if keyword.strip()]
    if keywords:
        search_blogs = data.filter(keyword__word__in=keyword_list).distinct()
        return search_blogs
    else:
        return data
    

def pagination(request, obj):
    per_page = int(request.GET.get('per_page', 10))
    page_num = int(request.GET.get('page_num', 1))
    paginator = Paginator(obj, per_page)
    total_page = paginator.num_pages
    page_obj = paginator.get_page(page_num)
    return page_obj, total_page


def sort(request, obj):
    sort_param = str(request.GET.get('sort', "createdAt"))
    if sort_param == 'createdAt':
        sort_blog = obj.order_by('createdAt')
    elif sort_param == 'title':
        sort_blog = obj.order_by('title')
    elif sort_param == 'content':
        sort_blog = obj.order_by('content')
    elif sort_param == 'authorId':
        sort_blog = obj.order_by('authorId')
    else:
        return obj
    
    return sort_blog


class BlogView(APIView):

    def get(self, request):
        search_blogs = search(request)
        sort_obj = sort(request, search_blogs)
        page_obj, total_page = pagination(request, sort_obj)
        serializer = BlogReadSerializer(page_obj, many=True)
        return Response(data={"blog":serializer.data, "len": total_page})
    
    def post(self, request):

        keywords = request.data.get('keyword', [])
        for keyword in keywords:
            Keyword.objects.get_or_create(word=keyword)
        serializer = BlogCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            sort_obj = sort(request, data)
            page_obj, total_page = pagination(request, sort_obj)
            serializer = BlogReadSerializer(page_obj, many=True)
            return Response(data={"blog":serializer.data, "len":total_page})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlogDetailView(APIView):

    def get(self, request, id):
        blog = get_object_or_404(Blog, postId=id)
        serializer = BlogReadSerializer(blog)
        return Response(serializer.data)
