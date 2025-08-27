from django.contrib import admin
from django.contrib.auth.models import Group
from .models import GivingType, Giving

admin.site.unregister(Group)

class GivingInline(admin.TabularInline):
    model = Giving
    fk_name = 'type'
    extra = 0

class GivingTypeAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('giving_name',)}
    inlines = [
        GivingInline
    ]

admin.site.register(GivingType, GivingTypeAdmin)
