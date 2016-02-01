(function () {
    function controller (list) {
        this.list = list.data.tracks.track;
    }

    angular.module('lastFmApp')
        .controller('TracksListCtrl', controller);
})();
