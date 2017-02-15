import ServiceBase from 'helpers/ServiceBase'

class Service extends ServiceBase {
	constructor($http, $q) {
		super($http, $q)
		this.url_prefix = '/common'
		this.OBJ = {
            checkLogin: '/check',
        }
	}

    checkLogin() {
        return this.postRequest(this.OBJ.checkLogin)
    }
}

Service.$inject = [
	'$http', 
	'$q', 
]

export default Service