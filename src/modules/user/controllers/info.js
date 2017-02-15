class Ctrl {
    constructor(UserService){
        Object.assign(this, {
            UserService,  
        })

        this.init()
    }

    init() {
        
    }
}

Ctrl.$inject = [
    'UserService', 
] 

export default Ctrl