import angular from 'angular'
import { plugin, loadPlugin } from 'etc/loadplugin'
import authService from '../app/resolves/authService'

function Router($stateProvider) {

    //set router
    $stateProvider

        .state('web.user', {
            abstract: true,
            url: '/user',
            views: {
                'menu-content': {
                    templateProvider: ['$q', ($q) => {
                        return $q((resolve) => {
                            require.ensure([], () => {
                                resolve(require('html!../web/tpl/tabs.html'))
                            }, 'tabs.html')
                        })
                    }]
                }
            },
            resolve: {
                // authService: authService,
                loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            $ocLazyLoad.load({name: require('./main').default.name})
                            resolve()
                        }, 'user')
                    })
                }]
            }
        })

        .state('web.user.info', {
            url: '/info',
            views: {
                'tab-user': {
                    templateProvider: ['$q', ($q) => {
                        return $q((resolve) => {
                            require.ensure([], () => {
                                resolve(require('html!./tpl/info.html'))
                            }, 'user.info.html')
                        })
                    }],
                    controller: 'InfoCtrl as vm'
                }
            },
            resolve: {
                loadPlugin: loadPlugin([
                    plugin.store, 
                ])
            }
        })
}

Router.$inject = [
    '$stateProvider', 
]

export default angular
	.module('app.user.router', [])
    .config(Router)