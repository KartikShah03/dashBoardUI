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

		function getTotalTransactionDtls(msgUrl){
			var config={
				method: 'GET',
				url: '/'+msgUrl,
				params:{

				}
			};
			return makeDBServerRequest(config,true);
		}

		function getTodayTransactionDtls(){
			var config={
				method: 'GET',
				url: '/todayTransactionDtls',
				params:{

				}
			};
			return makeDBServerRequest(config,true);
		}

		function getTransactionTableDtls(){
			var config={
				method: 'GET',
				url: '/transactionTableDtls',
				params:{

				}
			};
			return makeDBServerRequest(config,true);
		}

		function successTrans(){
			var config={
				method: 'GET',
				url: '/getSuccessTrans',
				params:{

				}
			};
			return makeDBServerRequest(config,true);
		}

		function failuerTrans(){
			var config={
				method: 'GET',
				url: '/getFailedTrans',
				params:{

				}
			};
			return makeDBServerRequest(config,true);
		}

		function getSrchData(source,target,Sdate,Edate,state,identifier){
			var config = {
				method: 'GET',
				url: '/searchData',
				params:{
					source: source,
					target: target,
					Sdate: Sdate,
					Edate: Edate,
					state: state,
					identifier: identifier
				}
			};
			return makeDBServerRequest(config,true);
		}

		function getTransDtl(){
			var config={
				method: 'GET',
				url: '/transactionDetails',
				params:{

				}
			};
			return makeDBServerRequest(config,true);
		}

		return {
			getPieDtls: getPieDtls,
			getTotalTransactionDtls: getTotalTransactionDtls,
			getTodayTransactionDtls: getTodayTransactionDtls,
			successTrans: successTrans,
			failuerTrans: failuerTrans,
			getTransactionTableDtls : getTransactionTableDtls,
			getSrchData: getSrchData,
			getTransDtl: getTransDtl
		}
	});
})();