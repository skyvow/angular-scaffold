import angular from 'angular'
import ocLazyLoad from 'oclazyload'
import ngAnimate from 'angular-animate'
import ngSanitize from 'angular-sanitize'
import ngResource from 'angular-resource'
import uiRouter from 'angular-ui-router'
import angularMoment from 'angular-moment'
import 'ionic'
import 'ionic-angular'

// styles
import styles from 'assets/styles/main'

// config
import config from 'etc/config'

// controllers
import Controller from './controllers/index'

// routers
import Router from './routers/index'

// factory
import Service from './services/index'

// animations
import Animation from './animations/index'

// filters
import Filter from './filters/index'

// directives
import Directive from './directives/index'

angular
    .module('app.main', [
        Controller.name, 
        Router.name, 
        Service.name, 
        Animation.name, 
        Filter.name, 
        Directive.name, 
        Service.name, 
    ])

export default angular
    .module('app.index', [
        ocLazyLoad, 
        'ionic',  
        ngAnimate,  
        ngSanitize,  
        ngResource,  
        uiRouter, 
        angularMoment.name, 
        'app.main'
    ])