angular.module('app').controller('threadCtrl', function($scope, $firebaseObject, $firebaseArray, threadSvc, threadRef, commentsRef){

  var thread = $firebaseObject(threadRef);
  
  thread.$bindTo($scope, 'thread');

$scope.createThread = function () {
    $scope.threads.$add($scope.newThread);
  };

});