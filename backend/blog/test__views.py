from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from django.contrib.auth.models import User
from .models import Blog, Keyword
from .serializer import BlogReadSerializer, BlogCreateSerializer

# initialize the APIClient app
client = APIClient()

class GetAllBlogsTest(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.client.login(username='testuser', password='testpass')
        self.blog1 = Blog.objects.create(authorId=self.user, title='Blog 1', content='Content 1')
        self.blog2 = Blog.objects.create(authorId=self.user, title='Blog 2', content='Content 2')
        self.blog3 = Blog.objects.create(authorId=self.user, title='Blog 3', content='Content 3')
        self.keyword1 = Keyword.objects.create(word='keyword1')
        self.keyword2 = Keyword.objects.create(word='keyword2')
        self.blog1.keyword.add(self.keyword1)
        self.blog2.keyword.add(self.keyword2)
        self.blog3.keyword.add(self.keyword1, self.keyword2)

    def test_get_all_blogs(self):
        # get API response
        response = client.get(reverse('blog-list'))

        # get data from db
        blogs = Blog.objects.all()
        serializer = BlogReadSerializer(blogs, many=True)
        self.assertEqual(response.data['blog'], serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class CreateNewBlogTest(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.client.login(username='testuser', password='testpass')
        self.valid_payload = {
            'authorId': self.user.id,
            'title': 'Blog 4',
            'content': 'Content 4',
            'keyword': ['keyword1', 'keyword2']
        }
        self.invalid_payload = {
            'authorId': self.user.id,
            'title': 'Blog 5',
            'content': 'Blog 5',
            'keyword': []
        }

    def test_create_blog(self):
        url = reverse('blog-list')
        response = self.client.post(url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Blog.objects.count(), 1)
        self.assertEqual(Keyword.objects.count(), 2)

    def test_create_invalid_blog(self):
        response = client.post(
            reverse('blog-list'),
            data=self.invalid_payload,
            format='json'
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data, {"keyword": ["This list may not be empty."]})

class GetSingleBlogTest(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.blog1 = Blog.objects.create(authorId=self.user, title='Blog 1', content='Content 1')
        self.keyword1 = Keyword.objects.create(word='keyword1')
        self.blog1.keyword.add(self.keyword1)

    def test_get_valid_single_blog(self):
        response = client.get(
            reverse('blog-detail', kwargs={'id': self.blog1.postId})
        )
        blog = Blog.objects.get(postId=self.blog1.postId)
        serializer = BlogReadSerializer(blog)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_invalid_single_blog(self):
        response = client.get(
            reverse('blog-detail', kwargs={'id': 30})
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
