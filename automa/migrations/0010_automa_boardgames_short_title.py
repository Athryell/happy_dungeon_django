# Generated by Django 4.0.2 on 2022-03-04 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('automa', '0009_automa_boardgames_size'),
    ]

    operations = [
        migrations.AddField(
            model_name='automa_boardgames',
            name='short_title',
            field=models.CharField(default=models.CharField(max_length=32), max_length=16),
        ),
    ]
