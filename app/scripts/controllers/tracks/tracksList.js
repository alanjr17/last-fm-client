(function () {
    function controller ($scope, topTracksSrv) {

        topTracksSrv.getAll()
            .success(function success (response) {
                $scope.tracks = response.tracks.track;
            });
    }

    angular.module('lastFmApp')
        .controller('TracksListCtrl', controller);
})();
