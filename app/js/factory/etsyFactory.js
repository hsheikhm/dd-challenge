'use strict';

angular.module('etsyAppServices')
  .factory('Listing', ['$http', function($http){
    var queryUrl = 'https://openapi.etsy.com/v2/Listing/active?api_key=n6mbi422ip24opnbsin32bk9';
    return {
      query: function(listingFilter){
        return $http({
          url: queryUrl,
          method: 'GET',
          params: {
              //  'term': listingFilter
            },
        });
      }
    };
  }]);
