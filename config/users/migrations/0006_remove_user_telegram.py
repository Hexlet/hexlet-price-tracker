# Generated by Django 5.2.4 on 2025-07-14 09:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_alter_user_avatar_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='telegram',
        ),
    ]
