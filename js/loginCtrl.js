angular.module('app').controller('loginCtrl', function($scope, $firebaseObject, $firebaseArray, userService, $state){

$scope.login = function(){
  userService.login($scope.username, $scope.password);
  $state.go('threads');
};

});
