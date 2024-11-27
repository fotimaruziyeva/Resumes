from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    content = models.TextField()

    def __str__(self):
        return f"{self.name} {self.email}"
class Category(models.Model):
    name=models.CharField(max_length=50)
    
    def __str__(self):
        return self.name
class Work(models.Model):
    image = models.ImageField(upload_to='works/', blank=True, null=True)
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title

class Resume(models.Model):
    image=models.ImageField("Images/resume")
    description=models.TextField()
    age=models.IntegerField(null=True, blank=True)
    address=models.CharField(max_length=50)
    phone_number=PhoneNumberField()
    email=models.EmailField()
    developer=models.CharField(max_length=70)
    residence=models.CharField(max_length=50)
    
