(function () {
    function controller ($scope, $state) {

        function setup() {
            $scope.$state = $state;
        }

        setup();
    }

    angular.module('lastFmApp')
        .controller('HomeCtrl', controller);
})();
