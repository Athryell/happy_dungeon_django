from django.shortcuts import render
from .models import Rulebook

def rulebooks(request):
    rulebooks = Rulebook.objects.all()

    return render(request, 'rulebooks/rulebooks.html', {
        "rulebooks": rulebooks  
    })

# def rules(request, html_filename):
#     return render(request, f'rulebooks/{html_filename}.html', {
#         "html_filename": html_filename
#     })

def rules(request, html_filename):
    title = ''
    for r in Rulebook.objects.all():
        if r.link_to_page_rules == html_filename:
            title = r.title
            break

    rulebook_to_display = f'rulebooks/{html_filename}.html'

    return render(request, f'rulebooks/solorules_base.html', {
        "rulebook_to_display": rulebook_to_display,
        "title": title
    })