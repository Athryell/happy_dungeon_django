# Generated by Django 4.0.3 on 2022-04-04 18:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('automa', '0011_automa_boardgames_is_ready_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='automa_boardgames',
            name='short_title',
            field=models.CharField(default=models.CharField(max_length=32), max_length=32),
        ),
    ]