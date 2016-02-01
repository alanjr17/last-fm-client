(function () {
    function controller (detail) {
        this.detail = detail.data.artist;
    }

    angular.module('lastFmApp')
        .controller('ArtistDetailCtrl', controller);
})();
