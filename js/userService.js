angular.module('app').service('userService', function(fb, $firebaseObject, $firebaseArray, $firebaseAuth, $state){

  var authRef = new Firebase(fb.url);
  var auth = $firebaseAuth(authRef);

  this.getUser = function(){
  var authData =  authRef.getAuth();
  if (authData) {
    console.log("Logged in as:", authData.uid);
      } else {
    console.log("Logged out");
      }
return authData;
  };

  this.register = function(email, password){
    authRef.createUser({email: email, password: password}).then(function(userData) {console.log("User " + userData.uid + " created successfully!");
    return authRef.authWithPassword({email: email, password: password});})
    .then(function(authData) {console.log("Logged in as:", authData.uid);})
    .catch(function(error) {console.error("Error: ", error);});
  };

  this.login = function(email, password){
    authRef.authWithPassword({email: email, password: password})
    .then(function(authData) {console.log("Logged in as:", authData.uid);
    return authData;
  })
    .catch(function(error) {console.error("Authentication failed:", error);});
  };

  this.logout = function() {
    $state.go('login');
    return authRef.unauth();
};

});
