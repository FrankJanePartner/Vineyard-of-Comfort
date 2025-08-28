from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.utils.timezone import now
from django.contrib.auth.decorators import login_required
from django.utils.timezone import now
from datetime import timedelta
from .models import GivingType, Giving
from django.db.models import Sum


# Create your views here.
@login_required
def dashboard(request):    
    today = now().date()
    start_of_week = today - timedelta(days=today.weekday())  # Monday

    # Aggregate total amounts for each GivingType this week
    giving_summary = (
        Giving.objects
        .filter(created_at__date__gte=start_of_week, created_at__date__lte=today)
        .values("type__giving_name")
        .annotate(total_amount=Sum("amount"))
    )

    # Convert to dictionary for easier JSON-like use
    giving_data = {item["type__giving_name"]: item["total_amount"] or 0 for item in giving_summary}

    context = {
        "giving_data": giving_data,  # { "Tithe": 500, "Offering": 200, ... }
    }
    return render(request, "dashboard.html", context)

@login_required
def offering(request):
    return render(request, "offering-types.html")

@login_required
def print_out(request):
    giving_types = GivingType.objects.all()
    return render(request, "print_out.html", {"giving_types": giving_types})

def fetch_givings(request):
    giving_type_id = request.GET.get("giving_type")
    start_date = request.GET.get("start_date")
    end_date = request.GET.get("end_date")

    givings = Giving.objects.all()

    if giving_type_id and giving_type_id != "all":
        givings = givings.filter(giving_type_id=giving_type_id)

    if start_date and end_date:
        givings = givings.filter(date__range=[start_date, end_date])

    total_amount = sum(g.amount for g in givings)
    count_gifts = givings.count()
    unique_givers = givings.values("giver").distinct().count()
    avg_gift = total_amount / count_gifts if count_gifts > 0 else 0

    return JsonResponse({
        "total_amount": float(total_amount),
        "count_gifts": count_gifts,
        "unique_givers": unique_givers,
        "avg_gift": float(avg_gift),
    })
