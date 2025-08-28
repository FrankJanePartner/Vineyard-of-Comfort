from .models import GivingType, Giving
from django.utils.timezone import now
from datetime import timedelta
from django.db.models import Sum
from datetime import date


def weekly_giving(request):
    today = now().date()
    start_of_week = today - timedelta(days=today.weekday())   # Monday
    end_of_week = start_of_week + timedelta(days=6)

    last_week_start = start_of_week - timedelta(days=7)
    last_week_end = start_of_week - timedelta(days=1)

    # 🎨 A list of colors (add more if you want)
    color_palette = [
        "purple", "pink", "green", "blue", "teal", "orange", "red", "cyan", "yellow"
    ]

    # 🔹 Optionally: a list of icons to rotate
    icon_list = [
        "fas fa-donate", "fas fa-wallet", "fas fa-users",
        "fas fa-church", "fas fa-chart-line", "fas fa-hand-holding-usd",
        "fas fa-gift"
    ]

    data = []

    giving_types = GivingType.objects.all()
    for idx, gtype in enumerate(giving_types):
        # Assign color & icon dynamically by index
        color = color_palette[idx % len(color_palette)]
        icon = icon_list[idx % len(icon_list)]

        # This week
        this_week_total = (
            Giving.objects
            .filter(type=gtype, created_at__date__gte=start_of_week, created_at__date__lte=end_of_week)
            .aggregate(total=Sum("amount"))["total"] or 0
        )

        # Last week
        last_week_total = (
            Giving.objects
            .filter(type=gtype, created_at__date__gte=last_week_start, created_at__date__lte=last_week_end)
            .aggregate(total=Sum("amount"))["total"] or 0
        )

        # % change
        if last_week_total == 0 and this_week_total > 0:
            change = 100
        elif last_week_total == 0 and this_week_total == 0:
            change = 0
        else:
            change = ((this_week_total - last_week_total) / last_week_total) * 100

        data.append({
            "title": gtype.giving_name,
            "amount": round(this_week_total, 2),
            "change": round(change, 2),
            "color": color,
            "icon": icon,
        })

    return {
        "weekly_giving_data": data,
        "today": today,
    }



def global_giving_context(request):
    today = date.today()
    weekly_giving_data = Giving.objects.filter(created_at__week=today.isocalendar()[1])
    return {
        "today": today,
        "weekly_giving_data": weekly_giving_data,
    }
