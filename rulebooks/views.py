from django.shortcuts import render
from .models import Rulebook

def rulebooks(request):
    rulebooks = Rulebook.objects.all()

    print('>>>>>>>', type(rulebooks[0].thumbnail))

    return render(request, 'rulebooks/rulebooks.html', {
        "rulebooks": rulebooks  
    })

def rules(request, html_filename):
    return render(request, f'rulebooks/{html_filename}.html')