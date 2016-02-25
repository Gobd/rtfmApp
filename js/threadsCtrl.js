angular.module('app').controller('threadsCtrl', function($scope, $firebaseObject, $firebaseArray, threadSvc, threadsRef, userId, userService){

$scope.user = userId;

$scope.threads = $firebaseArray(threadsRef);

$scope.createThread = function () {
    $scope.threads.$add({title: $scope.newThreadTitle, username: $scope.user.password.email});
  };

});
