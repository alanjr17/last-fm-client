(function () {
    function controller ($scope, $stateParams, topBrandSrv) {
        topBrandSrv.get($stateParams.artistId)
            .success(function success (response) {
                $scope.artist = response.artist;
            });
    }

    angular.module('lastFmApp')
        .controller('ArtistDetailCtrl', controller);
})();
