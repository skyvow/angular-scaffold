import angular from 'angular'

// register
import register from 'helpers/register'

// constant
import AuthEvents from './authEvents'

// factory
import FileReader from './fileReader'
import AppService from './appService'
import AuthService from './authService'
import FileOptimization from './fileOptimization'
import TokenInterceptor from './tokenInterceptor'

export default 
	angular
		.module('app.service', [])
		.constant('AuthEvents', AuthEvents)


    register('app.service')
		.factory('FileReader', FileReader)
		.factory('AppService', AppService)
		.factory('AuthService', AuthService)
		.factory('FileOptimization', FileOptimization)
		.factory('TokenInterceptor', TokenInterceptor)