import RestBase from 'helpers/RestBase'

class Ctrl extends RestBase{
    constructor(HelpResource, $scope){
        super('helps', HelpResource, $scope)
        this.init()
    }

    init() {
        this.initForm()
        this.renderHtml()
    }

    renderHtml() {
        this.helps.detailAsync({id: this.$state.params.id})
        .then(data => {
            console.log(data)
            if (data.meta.code == 0) {
                const detail = data.data
                this.form = {
                    id     : detail._id,
                    title  : detail.title,
                    content: detail.content,
                }
            }
        })
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
        this.helps.update(this.form)
    }
}

Ctrl.$inject = [
    'HelpResource',
    '$scope',
] 

export default Ctrl