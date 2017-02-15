import index from './app/index'
import web from './web/index'
import help from './help/index'
import user from './user/index'

angular
    .module('App', [
        index.name,
        web.name,
        help.name,
        user.name,
    ])