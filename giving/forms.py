# from django import forms
# from django.contrib.auth.forms import (
#     AuthenticationForm,
#     PasswordResetForm,
#     SetPasswordForm,
# )

# from .models import CustomUser


# # class UserLoginForm(AuthenticationForm):

# #     email = forms.CharField(
# #         widget=forms.EmailInput(
# #             attrs={
# #                 "class": "form-control mb-3",
# #                 "placeholder": "anonymous@gmail.com",
# #                 "id": "email",
# #             }
# #         )
# #     )
# #     password = forms.CharField(
# #         widget=forms.PasswordInput(
# #             attrs={
# #                 "class": "form-control",
# #                 "placeholder": "Enter your password",
# #                 "id": "password",
# #             }
# #         )
# #     )


# class RegistrationForm(forms.ModelForm):

#     name = forms.CharField(
#         label="Enter name", min_length=4, max_length=50, help_text="Required"
#     )
#     email = forms.EmailField(
#         max_length=100,
#         help_text="Required",
#         error_messages={"required": "Sorry, you will need an email"},
#     )
#     password = forms.CharField(label="Password", widget=forms.PasswordInput)
#     password2 = forms.CharField(label="Password2", widget=forms.PasswordInput)
    
#     class Meta:
#         model = CustomUser
#         fields = (
#             "name",
#             "email",
#         )

#     def clean_name(self):
#         name = self.cleaned_data["name"].lower()
#         r = CustomUser.objects.filter(name=name)
#         if r.count():
#             raise forms.ValidationError("name already exists")
#         return name

#     def clean_password2(self):
#         cd = self.cleaned_data
#         if cd["password"] != cd["password2"]:
#             raise forms.ValidationError("Passwords do not match.")
#         return cd["password2"]

#     def clean_email(self):
#         email = self.cleaned_data["email"]
#         if CustomUser.objects.filter(email=email).exists():
#             raise forms.ValidationError(
#                 "Please use another Email, that is already taken"
#             )
#         return email

#     def __init__(self, *args, **kwargs):
#         super().__init__(*args, **kwargs)
#         self.fields["name"].widget.attrs.update(
#             {"class": "form-control mb-3", "placeholder": "name"}
#         )
#         self.fields["email"].widget.attrs.update(
#             {
#                 "class": "form-control mb-3",
#                 "placeholder": "E-mail",
#                 "name": "email",
#                 "id": "id_email",
#             }
#         )
#         self.fields["password"].widget.attrs.update(
#             {"class": "form-control mb-3", "placeholder": "Password"}
#         )
#         self.fields["password2"].widget.attrs.update(
#             {"class": "form-control", "placeholder": "confirm Password"}
#         )


# class PwdResetForm(PasswordResetForm):

#     email = forms.EmailField(
#         max_length=254,
#         widget=forms.TextInput(
#             attrs={
#                 "class": "form-control mb-3",
#                 "placeholder": "Email",
#                 "id": "form-email",
#             }
#         ),
#     )

#     def clean_email(self):
#         email = self.cleaned_data["email"]
#         u = CustomUser.objects.filter(email=email)
#         if not u:
#             raise forms.ValidationError(
#                 "Unfortunatley we can not find that email address"
#             )
#         return email


# class PwdResetConfirmForm(SetPasswordForm):
#     new_password1 = forms.CharField(
#         label="New password",
#         widget=forms.PasswordInput(
#             attrs={
#                 "class": "form-control mb-3",
#                 "placeholder": "New Password",
#                 "id": "form-newpass",
#             }
#         ),
#     )
#     new_password2 = forms.CharField(
#         label="Repeat password",
#         widget=forms.PasswordInput(
#             attrs={
#                 "class": "form-control mb-3",
#                 "placeholder": "New Password",
#                 "id": "form-new-pass2",
#             }
#         ),
#     )


# class UserEditForm(forms.ModelForm):

#     email = forms.EmailField(
#         label="Account email (can not be changed)",
#         max_length=200,
#         widget=forms.TextInput(
#             attrs={
#                 "class": "form-control mb-3",
#                 "placeholder": "email",
#                 "id": "form-email",
#                 "readonly": "readonly",
#             }
#         ),
#     )

#     name = forms.CharField(
#         label="Firstname",
#         min_length=4,
#         max_length=50,
#         widget=forms.TextInput(
#             attrs={
#                 "class": "form-control mb-3",
#                 "placeholder": "name",
#                 "id": "form-firstname",
#                 "readonly": "readonly",
#             }
#         ),
#     )

#     first_name = forms.CharField(
#         label="name",
#         min_length=4,
#         max_length=50,
#         widget=forms.TextInput(
#             attrs={
#                 "class": "form-control mb-3",
#                 "placeholder": "Firstname",
#                 "id": "form-lastname",
#             }
#         ),
#     )

#     class Meta:
#         model = CustomUser
#         fields = (
#             "email",
#             "name",
#             "first_name",
#         )

#     def __init__(self, *args, **kwargs):
#         super().__init__(*args, **kwargs)
#         self.fields["name"].required = True
#         self.fields["email"].required = True
