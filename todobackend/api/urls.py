from django.urls import path, include
from . import views
urlpatterns = [
    path('<int:id>/',views.itembyid),
    path('',views.get_or_post_item),
    path('<int:id>/',views.itembyid),
    path('<int:id>/',views.itembyid)
]