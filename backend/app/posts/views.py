
from django.contrib.postgres.search import SearchVector, SearchQuery, \
                                            SearchRank

from rest_framework import generics
from rest_framework import permissions, authentication

from posts.models import Post
from posts.serializers import PostSerializer

class SearchResultsList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PostSerializer
    
    def get_queryset(self):
        query = self.request.query_params.get("q") # search as "?q=tagname&userId"
        search_vector = SearchVector("title", "description")
        search_query = SearchQuery(query)
        
        return Post.objects.annotate(
            search=search_vector, rank=SearchRank(search_vector, search_query)
            ).filter(search=search_query).order_by("-rank")
