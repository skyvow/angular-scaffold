import angular from 'angular'

// register
import register from 'helpers/register'

// directives
import tabset from './tabset'
import tab from './tab'
import filemodel from './filemodel'
import image404 from './image404'

export default 
	angular
		.module('app.directive', [])


    register('app.directive')
    	.directive('tabset', tabset)
	    .directive('tab', tab)
	    .directive('fileModel', filemodel)
	    .directive('image404', image404)