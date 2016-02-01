(function () {
    function controller (list) {
        this.list = list.data.topartists.artist;
    }

    angular.module('lastFmApp')
        .controller('ArtistsListCtrl', controller);
})();
