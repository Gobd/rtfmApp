angular.module('app').controller('threadsCtrl', function($scope, $firebaseObject, $firebaseArray, threadSvc, threadsRef){

$scope.threads = $firebaseArray(threadsRef);

$scope.createThread = function () {
    $scope.threads.$add($scope.newThread);
  };

});
