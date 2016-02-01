(function () {
    function config ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/artists/list');

        $stateProvider
            .state('lastFM', {
                url: '',
                abstract: true,
                templateUrl: 'views/partials/main.html',
                controller: 'HomeCtrl'
            })
            // Artist's states
            .state('lastFM.artists', {
                url: '/artists',
                abstract: true,
                templateUrl: 'views/partials/artists/main.html',
            })
            .state('lastFM.artists.list', {
                url: '',
                templateUrl: 'views/partials/artists/list.html',
                controller: 'ArtistsListCtrl'
            })
            .state('lastFM.artists.detail', {
                url: '/:artistId',
                templateUrl: 'views/partials/artists/detail.html',
                controller: 'ArtistDetailCtrl'
            })
            // Track's states
            .state('lastFM.tracks', {
                url: '/tracks',
                abstract: true,
                templateUrl: 'views/partials/tracks/main.html',
            })
            .state('lastFM.tracks.list', {
                url: '',
                templateUrl: 'views/partials/tracks/list.html',
                controller: 'TracksListCtrl'
            });
    }

    angular.module('lastFmApp')
        .config(config);

})();
