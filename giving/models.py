from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User
from django.utils.text import slugify

class GivingType(models.Model):
    giving_name = models.CharField(max_length=350)
    slug = models.SlugField(max_length=255, unique=True)
    create_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now_add=True)

    def save(self, *args, **kwargs):
        # If the slug is not provided, create one from the name
        if not self.slug:
            self.slug = slugify(self.giving_name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.giving_name

    def get_absolute_url(self):
        return reverse("giving_types_detail", kwargs={"pk": self.pk})

class Giving(models.Model):
    type = models.ForeignKey(GivingType, on_delete=models.CASCADE, help_text=("Defines what the giving is for."), related_name="giving_type")
    amount = models.FloatField(default=0.00)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.type.giving_name

    def get_absolute_url(self):
        return reverse("giving_detail", kwargs={"pk": self.pk})
