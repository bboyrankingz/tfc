from django.shortcuts import render
from base.person.models import Person


def home(request, username=None, template_name='home.html'):
    """
    Returns home page.

    Templates: ``home.html``
    Context:
        home
            Home object list
    """

    persons = Person.objects.all()

    return render(request, template_name, {
        'persons': persons,
        'title': 'Total Feeling Crew',
    })
