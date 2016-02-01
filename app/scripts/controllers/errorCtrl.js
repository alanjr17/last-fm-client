(function () {
    function controller ($stateParams) {
        this.message = $stateParams.error;
    }

    angular.module('lastFmApp')
        .controller('ErrorCtrl', controller);
})();
