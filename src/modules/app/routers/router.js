function Router($httpProvider, $urlRouterProvider, $locationProvider, $ionicConfigProvider) {
    
    // otherwise
    $urlRouterProvider.otherwise("/index/home")

    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
    
    // 注入拦截器
    $httpProvider.interceptors.push('TokenInterceptor')

    // html5Mode
    // $locationProvider.html5Mode(true)
    
    // set cache false
    $ionicConfigProvider.views.maxCache(0)
}

Router.$inject = [
    '$httpProvider', 
    '$urlRouterProvider', 
    '$locationProvider', 
    '$ionicConfigProvider', 
]

export default Router