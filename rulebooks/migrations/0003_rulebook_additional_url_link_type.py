# Generated by Django 4.0.3 on 2022-04-14 15:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rulebooks', '0002_alter_rulebook_is_ready'),
    ]

    operations = [
        migrations.AddField(
            model_name='rulebook_additional_url',
            name='Link_type',
            field=models.CharField(choices=[('GEN', 'General'), ('VID', 'Video'), ('FIL', 'File')], default='GEN', max_length=3),
        ),
    ]
