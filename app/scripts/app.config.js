(function () {
    function config ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/partials/main.html',
                controller: 'HomeCtrl'
            });
    }

    angular.module('lastFmApp').config(config);
})();
