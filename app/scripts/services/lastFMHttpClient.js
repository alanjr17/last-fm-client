(function () {
    'use strict';

    function LastFMHttpClient () {

        var options = {
            api_url: 'http://ws.audioscrobbler.com/2.0/',
            api_key: '1ea476011a970d4658b7ae3a85170d36',
            format: 'json'
        };

        this.setDefaultOptions = function ( newOptions ) {
            angular.extend(options, newOptions);
        };

        this.$get = function LastFMHttpClientFactory ($http) {

            function LastFMHttpClient (method) {
                this.method = method;
            }

            LastFMHttpClient.prototype.get = function(data) {
                var self = this;

                var params = {
                    method: self.method,
                    api_key: options.api_key,
                    format: options.format
                };

                angular.extend(params, data);

                return $http.get(options.api_url, {
                    params: params
                });
            };

            return LastFMHttpClient;
        };

    }

    angular.module('lastFmApp')
        .provider('LastFMHttpClient', LastFMHttpClient);
})();
