# Generated by Django 3.0.5 on 2021-04-22 16:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('valuate', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='uservaluationdetails',
            old_name='year',
            new_name='calculate_year',
        ),
    ]
