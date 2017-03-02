from rest_framework import generics

from fourbox.models import MakeDoc
from fourbox.serializer import FbDocSerializer


# doc list
class FbDocList(generics.ListCreateAPIView):
    queryset = MakeDoc.objects.all()
    serializer_class = FbDocSerializer


# doc object
class FbDocDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = MakeDoc.objects.all()
    serializer_class = FbDocSerializer


# doc list week num
class FbDocWeekList(generics.ListAPIView):
    serializer_class = FbDocSerializer

    def get_queryset(self):
        week_num = self.request.query_params.get('week')
        user_name = self.request.query_params.get('name')
        date_year = self.request.query_params.get('year')

        kwargs = {
        }

        if week_num is not None:
            kwargs['week_num'] = week_num

        if user_name is not None:
            kwargs['user_name'] = user_name

        if date_year is not None:
            kwargs['date__year'] = date_year

        return MakeDoc.objects.filter(**kwargs)
