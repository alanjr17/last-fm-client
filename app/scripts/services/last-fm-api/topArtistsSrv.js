(function () {
    'use strict';

    function TopBrandSrv (LastFMHttpClient) {

        var topBrandSrv = {
            get: get,
            getAll: getAll
        };

        function getAll (country) {
            var method = 'geo.getTopArtists';
            var client = new LastFMHttpClient(method);
            var defaultCountry = 'mexico';

            return client.get({
                country: country || defaultCountry
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
