# Generated by Django 4.0.2 on 2022-04-02 20:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('automa', '0010_automa_boardgames_short_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='automa_boardgames',
            name='is_ready',
            field=models.BooleanField(default='False'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='automa_boardgames',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='automa/games_cover'),
        ),
    ]