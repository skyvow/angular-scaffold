class Ctrl {
    constructor($scope, $timeout, $state, $window){
        Object.assign(this, {
            $scope, 
            $timeout, 
            $state, 
            $window, 
        })

        this.init()
    }

    // init 
    init() {

    }
}

Ctrl.$inject = [
    '$scope', 
    '$timeout', 
    '$state', 
    '$window', 
] 

export default Ctrl