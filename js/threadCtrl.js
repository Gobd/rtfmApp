angular.module('app').controller('threadCtrl', function($scope, $firebaseObject, $firebaseArray, threadSvc, threadRef, commentsRef, userService){

  var thread = $firebaseObject(threadRef);

  $scope.user = userService.getUser();

  thread.$bindTo($scope, 'thread');

  $scope.comments = $firebaseArray(commentsRef);

  $scope.createComment = function(){
    $scope.comments.$add({text: $scope.newCommentText, username: $scope.user.password.email});
  };

});
