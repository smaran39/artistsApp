var artistControllers = angular.module('artistControllers',['ngAnimate']);

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
    //for previous item
    if($routeParams.itemId > 0){
      $scope.prevItem = Number($routeParams.itemId) - 1;
    }else {
      $scope.prevItem = $scope.artists.length -1;
    }
    //for next item
    if($routeParams.itemId < $scope.artists.length-1){
      $scope.nextItem = Number($routeParams.itemId) + 1;
    }else {
      $scope.nextItem = 0;
    }

  });
}]);
