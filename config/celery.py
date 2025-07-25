import os

from celery import Celery

# where our settings.py is
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
# creating Celery app
app = Celery("config")
# startings Celery settings from settings.py with prefix CELERY
app.config_from_object("django.conf:settings", namespace="CELERY")
# searching for tasks in Django apps automatically
app.autodiscover_tasks()
