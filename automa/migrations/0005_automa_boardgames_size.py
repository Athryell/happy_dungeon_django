# Generated by Django 4.0.2 on 2022-03-03 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('automa', '0004_remove_automa_boardgames_isautoma_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='automa_boardgames',
            name='size',
            field=models.CharField(default=None, max_length=8),
            preserve_default=False,
        ),
    ]
