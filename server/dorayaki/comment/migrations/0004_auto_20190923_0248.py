# Generated by Django 2.2.5 on 2019-09-23 02:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comment', '0003_auto_20190922_1322'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='parent',
            new_name='children',
        ),
    ]