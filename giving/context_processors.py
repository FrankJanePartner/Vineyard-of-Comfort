from .models import GivingType, Giving

def givingType(request):
    giving_type = GivingType.objects.all()
    giving = Giving.objects.all()
    return {
        "giving_type": giving_type,
        "givin": giving,  # maybe rename this to "giving" for clarity
    }
 