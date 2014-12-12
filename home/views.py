from django.shortcuts import render


def home(request, username=None, template_name='home.html'):
    """
    Returns home page.

    Templates: ``home.html``
    Context:
        home
            Home object list
    """
    return render(request, template_name, {
        'title': 'Total Feeling Crew',
    })
