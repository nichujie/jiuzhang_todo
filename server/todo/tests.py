from django.test import TestCase
from rest_framework.test import APIClient

from .models import Todo

# Create your tests here.
class TodoTestCase(TestCase):
    def setUp(self):
