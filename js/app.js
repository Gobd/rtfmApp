angular.module('app', ['firebase', 'ui.router'])

.constant('fb', {
  url: 'https://rtfmap.firebaseio.com/'
})

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/threads");

  $stateProvider
    .state('threads', {
      url: "/threads",
      templateUrl: "partials/threads.html",
      controller: 'threadsCtrl',
      resolve: {
        threadsRef: function(threadSvc){
          return threadSvc.getThreads();
        },
        userId: function(userService){
          return userService.getUser();
        }
      }
    })
    .state('thread', {
      url: "/thread/:threadId",
      templateUrl: "partials/thread.html",
      controller: 'threadCtrl',
      resolve: {
        threadRef: function(threadSvc, $stateParams){
          return threadSvc.getThread($stateParams.threadId);
        },
        commentsRef: function(threadSvc, $stateParams){
          return threadSvc.getComments($stateParams.threadId);
        }
      }
    })
    .state('login', {
      url: "/login",
      templateUrl: "partials/login.html",
      controller: 'loginCtrl'
    })
    .state('signup', {
      url: "/signup",
      templateUrl: "partials/signup.html",
      controller: 'signupCtrl'
    })
    .state('logout', {
    url: '/logout',
    controller: function(userService) {
        return userService.logout();
    },
});
});
