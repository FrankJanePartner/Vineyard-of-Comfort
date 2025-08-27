from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
# from .models import CustomUser
from django.contrib.auth.decorators import login_required
# from .forms import RegistrationForm #, UserLoginForm

# def account_register(request):

#     if request.user.is_authenticated:
#         return redirect("giving:dashboard")

#     if request.method == "POST":
#         registerForm = RegistrationForm(request.POST)
        
#         if registerForm.is_valid():
#             user = registerForm.save(commit=False)
#             user.email = registerForm.cleaned_data["email"]
#             user.set_password(registerForm.cleaned_data["password"])
#             user.is_active = False
#             user.save()
#             return render(request, "account/login.html")
#     else:
#         registerForm = RegistrationForm()
#     return render(request, "account/signup.html", {"form": registerForm})


# Create your views here.
@login_required
def dashboard(request):
    
    context = {
        
    }
    return render(request, "dashboard.html", context)

@login_required
def offering(request):
    return render(request, "offering-types.html")

@login_required
def print_out(request):
    return render(request, "print_out.html")