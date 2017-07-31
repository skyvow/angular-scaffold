import angular from 'angular'

// filters
import toUpperCase from './toUpperCase'

export default 
	angular
		.module('app.filter', [])
		.filter('toUpperCase', toUpperCase)