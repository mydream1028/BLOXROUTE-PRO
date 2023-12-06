from django.urls import path
from . import views
  
urlpatterns = [
    path('getuser/', views.GetUserView.as_view(), name ='getUser'),
    path('logout/', views.LogoutView.as_view(), name ='logout'),
    path('register/', views.RegisterView.as_view(), name ='register'),
]