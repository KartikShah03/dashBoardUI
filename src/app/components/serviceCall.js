(function() {
	'use strict';
	angular.module('Dashboard')
	.service('serviceCall',function($http, ApiUrl, $q){
		var SERVER_URL = ApiUrl;
		 var baseRequestConfig = {

		 };
		var authTokenAvailable = $q.defer();
		function makeDBServerRequest(customProps,notRequireAuthToken){
			var config ={

			};

			if(notRequireAuthToken){
				angular.extend(config, baseRequestConfig, customProps);
				config.url = SERVER_URL + customProps.url;

				return $http(config);
			}
			else{
				return authTokenAvailable.promise
				.then(function(){
					angular.extend(config, baseRequestConfig, customProps);
					config.url = SERVER_URL + '/secured' + customProps.url;

					return $http(config);
				});
			}
		}

		function requestAuthorization(username, password) {
        var config = {
          method: 'POST',
          url: '/login',
          data:{
					username: username,
					password: password
					
				}
        };
        return makeDBServerRequest(config,true);
      }

      function storeAuthToken(token) {
        // USE: fires as a promise handler from Authorization service
        // token should be the value the promise resolves with.
        var authToken = token;
        baseRequestConfig.headers = {"X-Auth-Token": authToken};
        authTokenAvailable.resolve(token); //token is available now.. we can proceed with other calls.
      }

      function flushAuthToken(){
        if(!baseRequestConfig.headers){
          baseRequestConfig.headers = {};
        }
        baseRequestConfig.headers.Authorization = null;
        authTokenAvailable = $q.defer();// reset promise
      }

		function getPieDtls(){
			var config ={
				method: 'GET',
				url: '/pie',
				params:{

				}
			};
			return makeDBServerRequest(config,false);
		}

		function getTotalTransactionDtls(msgUrl){
			var config={
				method: 'GET',
				url: '/'+msgUrl,
				params:{

				}
			};
			return makeDBServerRequest(config,false);
		}

		function getTodayTransactionDtls(){
			var config={
				method: 'GET',
				url: '/todayTransactionDtls',
				params:{

				}
			};
			return makeDBServerRequest(config,false);
		}

		
		function successTrans(){
			var config={
				method: 'GET',
				url: '/getSuccessTrans',
				params:{

				}
			};
			return makeDBServerRequest(config,false);
		}

		function failuerTrans(){
			var config={
				method: 'GET',
				url: '/getFailedTrans',
				params:{

				}
			};
			return makeDBServerRequest(config,false);
		}

		function getSrchData(source,target,Sdate,Edate,state,identifier){
			var config = {
				method: 'POST',
				url: '/search/osb/transactionTableDtls',
				data:{
					serviceId: '',
					sourceSystem: source,
					targetSystem: target,
					startDate: Sdate,
					endDate: Edate,
					state: state,
					fileNameIdentifie: identifier,
					date: '',				
					totalRecord:'500'
				}
			};
			return makeDBServerRequest(config,false);
		}

		function getTransDtl(){
			var config={
				method: 'GET',
				url: '/transactionDetails',
				params:{

				}
			};
			return makeDBServerRequest(config,false);
		}

		return {
			getPieDtls: getPieDtls,
			getTotalTransactionDtls: getTotalTransactionDtls,
			getTodayTransactionDtls: getTodayTransactionDtls,
			successTrans: successTrans,
			failuerTrans: failuerTrans,
			getSrchData: getSrchData,
			getTransDtl: getTransDtl,
			storeAuthToken: storeAuthToken,
	        flushAuthToken: flushAuthToken,
	        requestAuthorization: requestAuthorization
		}
	});
})();