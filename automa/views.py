from django.shortcuts import render
from django.http import JsonResponse
from .models import Automa_boardgames
from django.core.mail import send_mail

def automa_home(request):
    bg_list = Automa_boardgames.objects.all()

    return render(request, 'automa/automa.html', {
        'bg_list': bg_list
    })

# TODO: Change and redirect to game own function
def automa(request, bg_short_title):
    return render(request, f'automa/bg_{bg_short_title}.html')

def games_api(request):
    game_list = Automa_boardgames.objects.all()

    return JsonResponse([game.serialize() for game in game_list], safe=False)
