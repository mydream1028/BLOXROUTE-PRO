from django.test import TestCase
from django.contrib.auth.models import User
from .models import Keyword, Blog

# Create your tests here.

class KeywordModelTest(TestCase):
    def setUp(self):
        self.keyword = Keyword.objects.create(word='test')

    def test_keyword_str(self):
        self.assertEqual(str(self.keyword), 'test')

class BlogModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.blog = Blog.objects.create(authorId=self.user, title='Test Blog', content='Lorem ipsum dolor sit amet')

    def test_blog_str(self):
        self.assertEqual(str(self.blog), 'Test Blog')

    def test_blog_keyword(self):
        keyword = Keyword.objects.create(word='test')
        self.blog.keyword.add(keyword)
        self.assertEqual(self.blog.keyword.count(), 1)

    def test_blog_created_at(self):
        self.assertIsNotNone(self.blog.createdAt)

