from django.shortcuts import render
from django.http import JsonResponse
from .models import Automa_boardgames
from django.core.mail import send_mail

def home(request):
    bg_list = Automa_boardgames.objects.all()

    return render(request, 'automa/home.html', {
        'bg_list': bg_list
    })

# TODO: Change and redirect to game own function
def automa(request, bg_short_title):
    return render(request, f'automa/bg_{bg_short_title}.html')

def games_api(request):
    game_list = Automa_boardgames.objects.all()

    return JsonResponse([game.serialize() for game in game_list], safe=False)

def contact(request):
    if request.method == 'POST':
        message_name = request.POST['message-name']
        message_email = request.POST['message-email']
        message_text = request.POST['message-text']

        send_mail(
            f'Sito Happy Dungeon - {message_name}', # subject
            f'Name: {message_name} '
            + f'- Email: {message_email} '
            + f'- Content: {message_text} ', # message
            message_email, # from
            ['happy_dungeon@hotmail.com'], # to
        )

        return render(request, 'automa/contact.html', {
            'message_name': message_name
        })
    else:
        return render(request, 'automa/contact.html')
