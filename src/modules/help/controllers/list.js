import RestBase from 'helpers/RestBase'

class Ctrl extends RestBase{
    constructor(HelpResource, $scope){
        super('helps', HelpResource, $scope)
        this.init()
    }

    init() {
        this.helps.list()
    }
}

Ctrl.$inject = [
    'HelpResource',
    '$scope',
] 

export default Ctrl