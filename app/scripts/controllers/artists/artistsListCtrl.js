(function () {
    function controller ($scope, topBrandSrv) {

        topBrandSrv.getAll()
            .success(function success (response) {
                $scope.artists = response.topartists.artist;
            });
    }

    angular.module('lastFmApp')
        .controller('ArtistsListCtrl', controller);
})();
