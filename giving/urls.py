from django.urls import path
from .views import dashboard, offering, print_out
from django.urls import path

app_name = "giving"

urlpatterns = [
    path('', dashboard, name="dashboard"),
    path('offering/', offering, name="offering"),
    path('print_out/', print_out, name="print_out"),
]
