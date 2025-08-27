from django.apps import AppConfig


class GivingConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "giving"


    def ready(self):
        import giving.signals  # Importing signal handlers to connect them to Django's signal framework