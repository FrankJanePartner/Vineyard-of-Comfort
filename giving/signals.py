from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):

    if created:
        instance.is_staff = True  # Ensure staff status
        instance.is_active = True  # Ensure staff status
        instance.save(update_fields=["is_staff", "is_active"])  # Save only is_staff and is_active to avoid overriding other fields
        