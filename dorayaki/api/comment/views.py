from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from dorayaki.permissions import IsOwner
from dorayaki.api.comment.models import Comment
from dorayaki.api.comment.serializers import CommentSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    permission_classes = [
        IsAuthenticatedOrReadOnly,
        IsOwner,
    ]

    def list(self, request, *args, **kwargs):
        thread = self.request.query_params.get('thread', None)
        if thread is not None:
            queryset = self.filter_queryset(self.get_queryset().filter(thread=thread, parent=None))
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)

        content = {
            'error': {
                'type': 'invalid_request_error',
                'message': 'Invalid query param provided for thread: ' + str(thread),
            }
        }
        return Response(content, status.HTTP_400_BAD_REQUEST)
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)