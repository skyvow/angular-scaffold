import webpack from 'webpack'
import path from 'path'
import pkg from './package.json'

// 公共模块
const vendor = Object.keys(pkg.dependencies)

export default {
    context: path.join(__dirname, ''),
    entry: {
        vendor: [
            ...vendor,
            'ionic',
            'ionic-angular',
        ],
    },
    output: {
        path: './build/assets/js/',
        filename: '[name].js',
        library: '[name]',
    },
    plugins: [
        // 动态链接库，预编译资源模块
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname,
        }),
    ],
    resolve: {
        alias: {
            'ionic': path.resolve(__dirname, 'src/assets/plugins/ionic/js/ionic.js'),
            'ionic-angular': path.resolve(__dirname, 'src/assets/plugins/ionic/js/ionic-angular.js'),
        },
    },
}
