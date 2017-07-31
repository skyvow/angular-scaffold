import angular from 'angular'

// register
import register from 'helpers/register'

// controllers
import InfoCtrl from './controllers/info'

// services
import UserService from './service'

export default 
	angular
		.module('app.user', [])
        .controller('InfoCtrl', InfoCtrl)


    register('app.user')
    	.factory('UserService', UserService)