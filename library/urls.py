from rest_framework.routers import DefaultRouter

from library.views import BookView

router = DefaultRouter()
router.register(r'book', BookView, basename='user')
urlpatterns = router.urls