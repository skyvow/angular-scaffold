import RestBase from 'helpers/RestBase'

class Ctrl extends RestBase{
    constructor(HelpResource, $scope){
        super('helps', HelpResource, $scope)
        this.init()
    }

    init() {
        this.initForm()
    }

    initForm() {
        this.form = {
            title  : null,
            content: null,
        }
    }

    submitForm(isValid) {
        if (!isValid) return
        console.log(this.form)
        this.helps.save(this.form)
    }
}

Ctrl.$inject = [
    'HelpResource',
    '$scope',
] 

export default Ctrl