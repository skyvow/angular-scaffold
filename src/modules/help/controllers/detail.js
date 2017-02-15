import RestBase from 'helpers/RestBase'

class Ctrl extends RestBase{
    constructor(HelpResource, $scope){
        super('helps', HelpResource, $scope)
        this.init()
    }

    init() {
        this.helps.detail({
            id: this.$state.params.id
        })
    }
}

Ctrl.$inject = [
    'HelpResource',
    '$scope',
] 

export default Ctrl