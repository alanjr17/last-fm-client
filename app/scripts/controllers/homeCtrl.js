(function () {
    function controller ($scope, $http) {
        $http.get('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=1ea476011a970d4658b7ae3a85170d36&format=json').success(function (response) {
            $scope.data = response;
        });
        console.log('joder');
    }

    angular.module('lastFmApp')
        .controller('HomeCtrl', controller);
})();
