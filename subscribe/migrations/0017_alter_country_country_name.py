# Generated by Django 3.2.5 on 2021-08-01 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subscribe', '0016_country_country_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='country',
            name='country_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]