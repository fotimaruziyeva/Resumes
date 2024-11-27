from django.shortcuts import render
from django.views.generic.list import ListView
from django.views.generic.edit import FormView
from myapp.form import ContactForm
from django.http import HttpResponse
from .models import Work,Contact,Resume,Category
from myapp.form import ContactForm
from .bot import send_message
def home_view(request):
 return render(request=request,template_name='index.html')


class ContactFormView(FormView):
    template_name='contacts.html'
    form_class = ContactForm
    success_url = '/'

    def form_valid(self, form):
        name = form.cleaned_data.get('name')
        email = form.cleaned_data.get('email')
        content = form.cleaned_data.get('content')
        text = f"Name: {name}\nEmail: {email}\nContent: {content}"
        send_message(text)
        
        Contact.objects.create(name=name, email=email, content=content)
        return super().form_valid(form)

class WorksListView(ListView):
    model = Work
    template_name = "works.html"
    context_object_name = 'work_list'  
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['category_list'] = Category.objects.order_by('name')  
        return context
 
        
   
class ResumeListView(ListView):
     model = Resume
     queryset = Resume.objects.all() 
     context_object_name = 'resume'
     template_name = "resume.html"
     
     
   

     
     