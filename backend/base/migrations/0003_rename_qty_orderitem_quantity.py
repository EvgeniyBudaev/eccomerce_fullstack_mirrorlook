# Generated by Django 3.2 on 2021-04-24 07:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_auto_20210417_2010'),
    ]

    operations = [
        migrations.RenameField(
            model_name='orderitem',
            old_name='qty',
            new_name='quantity',
        ),
    ]
