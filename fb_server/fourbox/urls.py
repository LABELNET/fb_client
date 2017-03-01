from django.conf.urls import url

from fourbox.views import FbDocList, FbDocDetail

urlpatterns = [
    # doc
    url(r'^mdocs/$', FbDocList.as_view()),
    url(r'^mdocs/(?P<pk>[0-9]+)$', FbDocDetail.as_view()),
]
