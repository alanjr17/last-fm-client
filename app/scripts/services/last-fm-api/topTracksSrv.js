(function () {
    'use strict';

    function TopTracksSrv (LastFMHttpClient) {

        var topTracksSrv = {
            getAll: getAll
        };

        function getAll (country, limit) {
            var method = 'geo.getTopTracks';
            var client = new LastFMHttpClient(method);
            var defaultCountry = 'mexico';
            var defaultLimit = 10;

            return client.get({
                country: country || defaultCountry,
                limit: limit || defaultLimit
            });
        }

        return topTracksSrv;
    }

    angular.module('lastFmApp')
        .factory('topTracksSrv', TopTracksSrv);
})();
