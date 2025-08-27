from django.urls import path, include
from .views import dashboard, offering, print_out#, account_register
from django.contrib.auth import views as auth_views
from django.urls import path
# from .forms import UserLoginForm

app_name = "giving"

urlpatterns = [
    path('', dashboard, name="dashboard"),
    path('offering/', offering, name="offering"),
    path('print_out/', print_out, name="print_out"),
    # path("account/register/", account_register, name="register"),
    # path(
    #     "account/login/",
    #     auth_views.LoginView.as_view(template_name="account/login.html", next_page="/", form_class=UserLoginForm),
    #     name="login"
    # ),
    # path("account/logout/", auth_views.LogoutView.as_view(next_page="/account/login/"), name="logout"),
]
