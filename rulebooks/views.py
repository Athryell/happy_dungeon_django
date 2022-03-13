from django.shortcuts import render

def rulebooks(request):
    return render(request, 'rulebooks/rulebooks.html')
