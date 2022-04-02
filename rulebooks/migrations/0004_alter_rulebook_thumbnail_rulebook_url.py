# Generated by Django 4.0.2 on 2022-03-31 21:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rulebooks', '0003_rulebook_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rulebook',
            name='thumbnail',
            field=models.ImageField(blank=True, null=True, upload_to='rulebooks_thumbnails'),
        ),
        migrations.CreateModel(
            name='Rulebook_url',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url_name', models.CharField(max_length=16)),
                ('url', models.CharField(blank=True, max_length=128, null=True)),
                ('game', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rulebooks.rulebook')),
            ],
        ),
    ]
