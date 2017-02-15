class Ctrl {
    constructor($state, WebService){
        Object.assign(this, {
            $state, 
            WebService, 
        })
        
        this.init()
    }

    init() {

    }
}

Ctrl.$inject = [
	'$state', 
    'WebService', 
] 

export default Ctrl