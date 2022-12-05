from django.core.management.base import BaseCommand
from faker import Faker

from posts.models import Post


class Command(BaseCommand):
    '''A management command that adds dummy post using Faker library'''

    def handle(self, *args, **options):
        fake = Faker()

        for _ in range(250):
            Post.objects.create(title=fake.name(), description=fake.text())

        print("Populated.")
