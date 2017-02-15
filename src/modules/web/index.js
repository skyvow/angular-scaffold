import { plugin, loadPlugin } from 'etc/loadplugin'
import authService from '../app/resolves/authService'

function Router($stateProvider) {
    
    //set router
    $stateProvider

        .state('web', {
            abstract: true,
            url: '',
            templateProvider: ['$q', ($q) => {
                return $q((resolve) => {
                    require.ensure([], () => {
                        resolve(require('html!./tpl/menu.html'))
                    }, 'web.menu.html')
                })
            }],
            resolve: {
                loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            $ocLazyLoad.load({name: require('./main').default.name})
                            resolve()
                        }, 'index')
                    })
                }]
            }
        })

        .state('web.index', {
            abstract: true,
            url: '/index',
            views: {
                'menu-content': {
                    templateProvider: ['$q', ($q) => {
                        return $q((resolve) => {
                            require.ensure([], () => {
                                resolve(require('html!./tpl/tabs.html'))
                            }, 'tabs.html')
                        })
                    }]
                }
            },
            // resolve: {
            //     authService: authService
            // }
        })

        .state('web.index.home', {
            url: '/home',
            views: {
                'tab-home': {
                    templateProvider: ['$q', ($q) => {
                        return $q((resolve) => {
                            require.ensure([], () => {
                                resolve(require('html!./tpl/home.html'))
                            }, 'web.home.html')
                        })
                    }],
                    controller: 'HomeCtrl as vm'
                }
            }
        })

        .state('web.index.develop', {
            url: '/develop',
            views: {
                'tab-home' : {
                    templateProvider: ['$q', ($q) => {
                        return $q((resolve) => {
                            require.ensure([], () => {
                                resolve(require('html!../common/tpl/develop.html'))
                            }, 'web.develop.html')
                        })
                    }],
                }
            }
        })
}

Router.$inject = [
    '$stateProvider', 
]

export default angular
	.module('app.web.router', [])
    .config(Router)