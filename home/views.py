from django.shortcuts import render
from base.person.models import Person
from base.media.models import Media


def home(request, username=None, template_name='home.html'):
    """
    Returns home page.

    Templates: ``home.html``
    Context:
        home
            Home object list
    """
    medias = Media.objects.all().order_by('-created')[:4]
    persons = Person.objects.all()

    return render(request, template_name, {
        'persons': persons,
        'object_list': medias,
        'title': 'Total Feeling Crew',
    })
