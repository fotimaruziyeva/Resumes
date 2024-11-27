from django.contrib import admin
from .models import Resume,Work,Contact,Category

admin.site.register((Resume,Contact,Work,Category))
