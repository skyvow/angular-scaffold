import angular from 'angular'

// register
import register from 'helpers/register'

// controllers
import HomeCtrl from './controllers/home'

// services
import WebService from './service'

export default 
	angular
		.module('app.web', [])
    	.controller('HomeCtrl', HomeCtrl)


    register('app.web')
    	.factory('WebService', WebService)