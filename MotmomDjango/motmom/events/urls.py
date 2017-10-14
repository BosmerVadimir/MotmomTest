from django.conf.urls import *
from rest_framework.urlpatterns import format_suffix_patterns

from events import views

urlpatterns = [
    # url(r'^$', views.index, name='index'),
    # url(r'^(?P<event_id>\d+)/$', post),
    # url(r'^api/$', views.InsertViewSet.as_view({'get': 'list', 'post': 'create', 'delete': 'destroy'})),
     url(r'^api/(?P<id>[0-9]+)/$', views.InsertViewSet.as_view({'get': 'list', 'post': 'create', 'delete': 'destroy'})),
    # url(r'^insert/$', views.InsertViewSet.as_view({'get': 'list', 'post': 'create'})),
    # url(r'^api/(?P<pk>[0-9]+)/$', views.PostDetail.as_view()),

]

urlpatterns = format_suffix_patterns(urlpatterns)
