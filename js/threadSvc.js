angular.module('app').service('threadSvc', function(fb, $firebaseObject, $firebaseArray){

  this.getThreads = function(){
    return new Firebase(fb.url + '/threads');
  };

  this.getThread = function(threadId){
    return new Firebase(fb.url + '/threads/' + threadId);
  };

  this.getComments = function(threadId){
    return new Firebase(fb.url + '/threads/' + threadId + '/comments');
  };

});
