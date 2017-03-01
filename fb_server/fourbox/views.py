from rest_framework import generics
from rest_framework import mixins

from fourbox.models import MakeDoc
from fourbox.serializer import FbDocSerializer


# doc list
class FbDocList(mixins.ListModelMixin,
                mixins.CreateModelMixin,
                generics.GenericAPIView):
    queryset = MakeDoc.objects.all()
    serializer_class = FbDocSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, args, kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, args, kwargs)


# doc object
class FbDocDetail(mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  generics.GenericAPIView):
    queryset = MakeDoc.objects.all()
    serializer_class = FbDocSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, args, kwargs)

    def post(self, request, *args, **kwargs):
        return self.update(request, args, kwargs)
