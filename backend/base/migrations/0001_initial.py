# Generated by Django 3.1.7 on 2021-04-01 15:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('name', models.CharField(max_length=255, verbose_name='Имя категории')),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('slug', models.SlugField(unique=True)),
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('payment_method', models.CharField(blank=True, max_length=200, null=True, verbose_name='Способ оплаты')),
                ('tax_price', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Налог')),
                ('shipping_price', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Цена доставки')),
                ('total_price', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Итоговая сумма')),
                ('isPaid', models.BooleanField(default=False, verbose_name='Статус оплаты')),
                ('paidAt', models.DateTimeField(blank=True, null=True, verbose_name='Дата оплаты')),
                ('is_delivered', models.BooleanField(default=False, verbose_name='Статус доставки')),
                ('delivered_at', models.DateTimeField(auto_now_add=True, verbose_name='Дата доставки')),
                ('created_at', models.DateTimeField(blank=True, null=True, verbose_name='Дата создания')),
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('name', models.CharField(blank=True, max_length=200, null=True, verbose_name='Наименование')),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Описание')),
                ('rating', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Рейтинг')),
                ('numReviews', models.IntegerField(blank=True, null=True, verbose_name='Комментарии')),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=8, null=True, verbose_name='Цена')),
                ('count_in_stock', models.IntegerField(blank=True, default=0, null=True, verbose_name='Кол-во товара')),
                ('code', models.CharField(blank=True, max_length=32, null=True, verbose_name='Артикул')),
                ('color_frame', models.CharField(blank=True, max_length=64, null=True, verbose_name='Цвет рамы')),
                ('color_mirror', models.CharField(blank=True, max_length=64, null=True, verbose_name='Цвет зеркала')),
                ('base_mirror', models.CharField(blank=True, max_length=64, null=True, verbose_name='Цвет основы')),
                ('height', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Высота')),
                ('width', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Ширина')),
                ('weight', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Вес')),
                ('type_of_installation', models.CharField(blank=True, max_length=64, null=True, verbose_name='Тип установки')),
                ('type_of_mounting', models.CharField(blank=True, max_length=64, null=True, verbose_name='Тип навески')),
                ('heightWithoutFrame', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Высота без рамы')),
                ('weightWithoutFrame', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Ширина без рамы')),
                ('faced', models.BooleanField(blank=True, default=True, null=True, verbose_name='Фацет')),
                ('form', models.CharField(blank=True, max_length=64, null=True, verbose_name='Форма')),
                ('appointment', models.CharField(blank=True, max_length=200, null=True, verbose_name='Назначение')),
                ('material_mirror', models.CharField(blank=True, max_length=200, null=True, verbose_name='Материал зеркала')),
                ('material_frame', models.CharField(blank=True, max_length=200, null=True, verbose_name='Материал рамы')),
                ('country_brand', models.CharField(blank=True, max_length=64, null=True, verbose_name='Страна бренда')),
                ('country_manufacturer', models.CharField(blank=True, max_length=64, null=True, verbose_name='Страна производства')),
                ('manufacturer', models.CharField(blank=True, max_length=64, null=True, verbose_name='Производитель')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('category_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='base.category', verbose_name='Категория')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Продукт',
                'verbose_name_plural': 'Продукты',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='ShippingAddress',
            fields=[
                ('address', models.CharField(blank=True, max_length=200, null=True, verbose_name='Адрес')),
                ('city', models.CharField(blank=True, max_length=200, null=True, verbose_name='Город')),
                ('postalCode', models.CharField(blank=True, max_length=200, null=True, verbose_name='Индекс')),
                ('country', models.CharField(blank=True, max_length=200, null=True, verbose_name='Страна')),
                ('shippingPrice', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Стоимость доставки')),
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('order', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='base.order')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('name', models.CharField(blank=True, max_length=200, null=True, verbose_name='Наименование')),
                ('rating', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Рейтинг')),
                ('comment', models.TextField(blank=True, null=True, verbose_name='Комментарий')),
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.product')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('name', models.CharField(blank=True, max_length=200, null=True, verbose_name='Наименование')),
                ('qty', models.IntegerField(blank=True, default=0, null=True, verbose_name='Кол-во')),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Цена')),
                ('image', models.CharField(blank=True, max_length=200, null=True, verbose_name='Фото')),
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('order', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.order')),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.product')),
            ],
        ),
    ]
