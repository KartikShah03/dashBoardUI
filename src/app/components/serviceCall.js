(function() {
	'use strict';
	angular.module('Dashboard')
	.service('serviceCall',function($http, ApiUrl, $q){
		var SERVER_URL = ApiUrl;
		var authTokenAvailable = $q.defer();
		function makeDBServerRequest(customProps,notRequireAuthToken){
			var config ={

			};

			if(notRequireAuthToken){
				angular.extend(config,customProps);
				config.url = SERVER_URL + customProps.url;

				return $http(config);
			}
			else{
				return authTokenAvailable.promise
				.then(function(){
					angular.extend(config,customProps);
					config.url = SERVER_URL + customProps.url;

					return $http(config);
				});
			}
		}

		function getPieDtls(){
			var config ={
				method: 'GET',
				url: '/pie',
				params:{

				}
			};
			return makeDBServerRequest(config,true);
		}
		return {
			getPieDtls: getPieDtls
		}
	});
})();