angular.module('devmtnTravel').controller('packagesCtrl', function( $scope, $stateParams, mainSrvc ) {
  mainSrvc.getPackageInfo().then( function( response ) {
    $scope.allPackages = response.data;
    console.log(response)

    if ( $stateParams.country ) {
      $scope.packages = $scope.allPackages.filter( function( package ) {
        return package.country === $stateParams.country;
      });
    }
  });
});