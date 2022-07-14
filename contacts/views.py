from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings

def contact(request):
#     if request.method == 'POST':
#         # if request.method == 'POST' and email and name:
#         #     send_mail(subject, content, settings.EMAIL_HOST_USER, ['kike1996@hotmail.com'], fail_silently=False)
#         message_name = request.POST['message-name']
#         message_email = request.POST['message-email']
#         message_text = request.POST['message-text']

#         subject = f'Sito Happy Dungeon - {message_name}'
#         content = f'Name: {message_name} \n - Email: {message_email} \n - Content: {message_text}'

#         send_mail(subject, content, settings.EMAIL_HOST_USER, ['happy_dungeon@hotmail.com'])

#         return render(request, 'contact/contact.html', {
#             'message_name': message_name
#         })
#     else:
    return render(request, 'contact/contact.html')

def mail_sent(request):
    return render(request, 'contact/mail-sent.html')

