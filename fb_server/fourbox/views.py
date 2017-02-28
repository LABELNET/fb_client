from rest_framework import generics
from rest_framework import mixins

from fourbox.models import Staff, Doc
from fourbox.serializer import FbStaffSerializer, FbDocSerializer


# staff list
class FbStaffList(mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  generics.GenericAPIView):
    queryset = Staff.objects.all()
    serializer_class = FbStaffSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, args, kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


# staff object
class FbStaffDetail(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    generics.GenericAPIView):
    queryset = Staff.objects.all()
    serializer_class = FbStaffSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, args, kwargs)

    def post(self, request, *args, **kwargs):
        return self.update(request, args, kwargs)


# doc list
class FbDocList(mixins.ListModelMixin,
                mixins.CreateModelMixin,
                generics.GenericAPIView):
    queryset = Doc.objects.all()
    serializer_class = FbDocSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, args, kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, args, kwargs)


# doc object
class FbDocDetail(mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  generics.GenericAPIView):
    queryset = Doc.objects.all()
    serializer_class = FbDocSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, args, kwargs)

    def post(self, request, *args, **kwargs):
        return self.update(request, args, kwargs)
