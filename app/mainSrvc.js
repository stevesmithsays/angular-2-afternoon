angular.module('devmtnTravel').service('mainSrvc', function( $http ) {
  this.getTravelInfo = function (){
    console.log("hit travel fun")
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmountain.com/api/travel/travel-info'
    })
  }
  this.getPackageInfo = function (){
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmountain.com/api/travel/package-info'
    });
  }
});