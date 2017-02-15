class RestBase{
	constructor($$model, $$Resource, $scope) {
		Object.assign(this, {
			$$model,
            $$Resource, 
            $scope, 
        })
        this.$$init()
	}

	$$init() {
		this[this.$$model] = {
			params: {
				page : 1,
				limit: 10,
			},
			canbeloaded: !0
		}

		this[this.$$model].list = (params) => {
			params = angular.extend(this[this.$$model].params, params)
			this.$$Resource.get(params).$promise
			.then(data => {
				console.log(data)
				if (data.meta.code == 0) {
					this[this.$$model].items = data.data
					this[this.$$model].canbeloaded = this.setCanbeloaded(data.data, this[this.$$model].params.limit)
				}
			})
		}

		this[this.$$model].detail = (params) => {
			this.$$Resource.get(params).$promise
			.then(data => {
				console.log(data)
				if (data.meta.code == 0) {
					this[this.$$model].item = data.data
				}
			})
		}
		
		this[this.$$model].save = (params) => {
			this.$$Resource.save(params).$promise
			.then(data => {
	            console.log(data)
	        })
		}

		this[this.$$model].update = (params) => {
			this.$$Resource.update(params).$promise
			.then(data => {
	            console.log(data)
	        })
		}

		this[this.$$model].delete = (params) => {
			this.$$Resource.delete(params).$promise
			.then(data => {
				console.log(data)
	        })
		}

		this[this.$$model].listAsync   = (params) => this.$$Resource.get(params).$promise
		
		this[this.$$model].detailAsync = (params) => this.$$Resource.get(params).$promise
		
		this[this.$$model].saveAsync   = (params) => this.$$Resource.save(params).$promise
		
		this[this.$$model].updateAsync = (params) => this.$$Resource.update(params).$promise
		
		this[this.$$model].deleteAsync = (params) => this.$$Resource.delete(params).$promise
	}

	doRefresh() {
		this[this.$$model].canbeloaded  = !0
		this[this.$$model].params.page  = 1
		this[this.$$model].params.limit = 10
		this[this.$$model].listAsync(this[this.$$model].params).then(data => {
			console.log(data)
			if (data.meta.code == 0) {
				this[this.$$model].items = data.data
				this[this.$$model].canbeloaded = this.setCanbeloaded(data.data, this[this.$$model].params.limit)
				this.$scope.$broadcast(`scroll.refreshComplete`)
			}
		})
	}

	loadMore() {
		++this[this.$$model].params.page
		this[this.$$model].listAsync(this[this.$$model].params).then(data => {
			console.log(data)
			if (data.meta.code == 0) {
				angular.forEach(data.data, (value, key) => this[this.$$model].items.push(value))
				this[this.$$model].canbeloaded = this.setCanbeloaded(data.data, this[this.$$model].params.limit)
				this.$scope.$broadcast(`scroll.infiniteScrollComplete`)
			}
		})
	}

	setCanbeloaded(data, limit) {
		if (!angular.isArray(data)) return !1
		if (!data.length) return !1
		return data.length === limit
	}
}

RestBase.$inject = [
    '$$Resource', 
    '$scope', 
] 

export default RestBase