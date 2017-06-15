var artistControllers = angular.module('artistControllers',[]);

artistControllers.controller('ListController',['$scope','$http',function ($scope,$http) {

//this is working with anglar version "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"
  $http.get('data.json').success(function(data) {
      // you can do some processing here
    $scope.artists=data;
    $scope.artistOrder='name';
  });
/*
// $http function changed in the later versions of Angular JS
  $http({
    method: 'GET',
    url: 'data.json'
  }).then(function successCallback(data) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.artists=data;
      $scope.status="success";
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      $scope.status="Failed";
      console.log(response);
    });
*/

}]);


artistControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('data.json').success(function(data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;
  });
}]);
