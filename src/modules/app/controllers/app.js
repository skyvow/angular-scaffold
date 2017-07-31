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

    onTap(path) {
        this.$state.go(path)
    }
}

Ctrl.$inject = [
    '$scope', 
    '$timeout', 
    '$state', 
    '$window', 
] 

export default Ctrl