import angular from 'angular'

// animations
import animate from './animate'

export default 
	angular
		.module('app.animation', [])
		.animation('.animate', animate)