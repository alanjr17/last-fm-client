(function () {
    'use strict';

    function TopBrandSrv (LastFMHttpClient) {

        var topBrandSrv = {
            get: get,
            getAll: getAll
        };

        function getAll (country, limit) {
            var method = 'geo.getTopArtists';
            var client = new LastFMHttpClient(method);
            var defaultCountry = 'mexico';
            var defaultLimit = 10;

            return client.get({
                country: country || defaultCountry,
                limit: limit || defaultLimit
            });
        }

        function get (name) {
            var method = 'artist.getInfo';
            var client = new LastFMHttpClient(method);

            return client.get({
                artist: name
            });
        }

        return topBrandSrv;
    }

    angular.module('lastFmApp')
        .factory('topBrandSrv', TopBrandSrv);
})();
