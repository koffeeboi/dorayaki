# Generated by Django 2.2.5 on 2019-09-18 08:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_user_is_staff'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=255, unique=True, verbose_name='username'),
        ),
    ]
