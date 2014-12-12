from django.conf.urls import *


urlpatterns = patterns(
    'tfc.home.views',
    url(r'^$', 'home', name='home'),
    )
