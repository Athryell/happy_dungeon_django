from django.db import models

class Rulebook(models.Model):
    is_ready = models.BooleanField(default=False)
    title = models.CharField(max_length=32)
    is_official = models.BooleanField(default=False)
    thumbnail = models.ImageField(upload_to="rulebooks/thumbnails", null=True, blank=True)
    description = models.TextField()
    link_to_page_rules = models.CharField(max_length=128)
    link_original = models.CharField(max_length=128, null=True, blank=True)
    link_ita = models.CharField(max_length=128, null=True, blank=True)
    link_amazon = models.CharField(max_length=128, null=True, blank=True)
    # file_PDF = models.FileField(null=True, blank=True)

    def __str__(self):
        return f'Rulebook: {self.title} - ready: {self.is_ready}'

class Rulebook_additional_url(models.Model):

    class LinkType(models.TextChoices):
        GENERAL = 'GEN'
        VIDEO = 'VID'
        FILE = 'FIL'
        PDF = 'PDF'

    link_type = models.CharField(
        max_length=3,
        choices=LinkType.choices,
        default=LinkType.GENERAL
    )

    game = models.ForeignKey("Rulebook", on_delete=models.CASCADE, related_name="url")
    url_name = models.CharField(max_length=32)
    url = models.CharField(max_length=128, null=True, blank=True)

    def __str__(self):
        return f'{self.game} - {self.url_name} '
    
