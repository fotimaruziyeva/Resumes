from django.urls import path
from .views import home_view,ContactFormView,WorksListView,ResumeListView

urlpatterns = [
  path('', home_view, name='home-page'),
  path('contact/',ContactFormView.as_view(),name='contact-page'),
  path('works/',WorksListView.as_view(),name="works-page" ),
  path('resume/',ResumeListView.as_view(),name="resume-page")
  
]
