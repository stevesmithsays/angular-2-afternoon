angular.module('devmtnTravel').controller('locationsCtrl', function( $scope, mainSrvc ) {
  mainSrvc.getTravelInfo().then( function( response ) {
    console.log("response in travel info", response)
    $scope.locations = response.data;

  });
  $scope.test = "testing in location"
}); 