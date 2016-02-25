angular.module('app').controller('signupCtrl', function($scope, $firebaseObject, $firebaseArray, userService, $state){

$scope.register = function(){
  userService.register($scope.username, $scope.password);
    $state.go('threads');
};

});
