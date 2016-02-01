(function () {
    'use strict';

    function TopTracksSrv (LastFMHttpClient) {

        var topTracksSrv = {
            getAll: getAll
        };

        function getAll (country) {
            var method = 'geo.getTopTracks';
            var client = new LastFMHttpClient(method);
            var defaultCountry = 'mexico';

            return client.get({
                country: country || defaultCountry
            });
        }

        return topTracksSrv;
    }

    angular.module('lastFmApp')
        .factory('topTracksSrv', TopTracksSrv);
})();
