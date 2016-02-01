(function () {
    function config (LastFMHttpClientProvider, $stateProvider, $urlRouterProvider) {
        LastFMHttpClientProvider.setDefaultOptions({
            api_key: '1ea476011a970d4658b7ae3a85170d36'
        });

        $urlRouterProvider.otherwise('/artists');

        $stateProvider
            .state('lastFM', {
                url: '',
                abstract: true,
                templateUrl: 'views/partials/main.html',
                controller: 'HomeCtrl',
                controllerAs: 'home'
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
                controller: 'ArtistsListCtrl',
                controllerAs: 'artists',
                resolve: {
                    list: function list (topBrandSrv) {
                        return topBrandSrv.getAll();
                    }
                }
            })
            .state('lastFM.artists.detail', {
                url: '/:artistId',
                templateUrl: 'views/partials/artists/detail.html',
                controller: 'ArtistDetailCtrl',
                controllerAs: 'artist',
                resolve: {
                    detail: function detail ($stateParams, topBrandSrv) {
                        return topBrandSrv.get($stateParams.artistId);
                    }
                }
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
                controller: 'TracksListCtrl',
                controllerAs: 'tracks',
                resolve: {
                    list: function list (topTracksSrv) {
                        return topTracksSrv.getAll();
                    }
                }
            })
            .state('lastFM.error', {
                url: '/error/:error',
                templateUrl: 'views/partials/error.html',
                controller: 'ErrorCtrl',
                controllerAs: 'error'
            });
    }

    function run ($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            event.preventDefault();

            // TODO: Error handling
            var errorMessage = 'Error';

            $state.go('lastFM.error', {
                error: error.data && error.data.message ? error.data.message : errorMessage
            });
        });
    }

    angular.module('lastFmApp')
        .config(config)
        .run(run);

})();
