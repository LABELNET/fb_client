from django.conf.urls import url

from fourbox.views import FbStaffList, FbStaffDetail, FbDocList, FbDocDetail, FbDraftDocList

urlpatterns = [
    # staff
    url(r'^users/$', FbStaffList.as_view()),
    url(r'^users/(?P<pk>[0-9]+)$', FbStaffDetail.as_view()),
    # doc
    url(r'^mdocs/$', FbDocList.as_view()),
    url(r'^mdocs/(?P<pk>[0-9]+)$', FbDocDetail.as_view()),
    url(r'^mdocs/(?P<uid>[0-9]+)/draft/$', FbDraftDocList.as_view()),

]
