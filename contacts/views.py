from django.shortcuts import render
from django.core.mail import send_mail

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

        return render(request, 'contact/contact.html', {
            'message_name': message_name
        })
    else:
        return render(request, 'contact/contact.html')

