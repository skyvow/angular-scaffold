// Load plugins
var webpack            = require('webpack'),                                             // webpack
    path               = require('path'),                                                // 路径
    moment             = require('moment'),                                              // moment 
    autoprefixer       = require("autoprefixer"),                                        // autoprefixer
    cssImport          = require("postcss-import"),                                      // import
    cssMixins          = require("postcss-mixins"),                                      // 函数
    cssExtend          = require("postcss-extend"),                                      // 继承
    conditionals       = require("postcss-conditionals"),                                // 条件语句
    cssEach            = require("postcss-each"),                                        // each
    cssFor             = require("postcss-for"),                                         // for
    nested             = require('postcss-nested'),                                      // CSS代码嵌套
    cssSimpleVars      = require("postcss-simple-vars"),                                 // 变量
    customMedia        = require("postcss-custom-media"),                                // media
    cssAtroot          = require("postcss-atroot"),                                      // atroot
    sprites            = require('postcss-sprites'),                                     // sprites 
    ExtractTextPlugin  = require("extract-text-webpack-plugin"),                         // css打包
    HtmlWebpackPlugin  = require('html-webpack-plugin'),                                 // 生成HTML文件
    CopyWebpackPlugin  = require('copy-webpack-plugin'),                                 // 文件copy
    CleanWebpackPlugin = require('clean-webpack-plugin'),                                // 清除文件
    OpenBrowserPlugin  = require('open-browser-webpack-plugin')                          // 自动打开浏览器

// 配置路径
var basePath = {
    src : 'src',
    dist: 'build'
}

// 配置环境
var ENV    = process.env.NODE_ENV,
    isTest = ENV === 'development' || ENV === 'dev',
    isProd = ENV === 'production'  || ENV === 'prod'

// 配置参数
var config = {
    context: path.join(__dirname, ''),

    // 入口文件配置
    entry: {
        app: [
            path.resolve(__dirname, basePath.src, 'modules/index.js')
        ],
        vendor: [
            'moment',
            'angular',
            'angular-i18n/angular-locale_ZH-CN.js',
            'angular-ui-router',
            'oclazyload',
            'angular-animate',
            'angular-sanitize',
            'angular-resource',
            'angular-moment',
            'ionic',
            'ionic-angular',
        ]
    },

    // 输出文件配置
    output: {
        path         : path.resolve(__dirname, basePath.dist),
        publicPath   : basePath.dist,
        filename     : '/assets/js/app.js',
        chunkFilename: '/chunk/[name].chunk.js'
    },

    // 配置插件
    plugins: [

        // 清除文件
        new CleanWebpackPlugin(['build'], {
            root: '',
            verbose: true, 
            dry: false
        }),
        
        // 复制文件
        new CopyWebpackPlugin([
            {
                from: basePath.src + '/assets/',
                to  : './assets/'
            }
        ]),

        // 打包公共 js 文件
        new webpack.optimize.CommonsChunkPlugin('vendor', '/assets/js/vendor.js'),

        // moment
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),

        // 将样式统一发布到 app.css 中
        new ExtractTextPlugin('assets/css/app.css', {
            allChunks: true
        })

    ],

    // 配置模块
    module: {

        // 加载器配置
        loaders: [

            // ES6 转码
            { 
                test: /\.js$/, 
                loader: 'babel', 
                exclude: [path.resolve(__dirname, 'node_modules')], 
            },

            // .css 文件使用 postcss 来处理并打包
            { 
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract('style', 'css!postcss', {
                    publicPath: '../../'
                })
            },

            // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL
            {
                test: /\.(gif|jpg|png)\??.*$/,
                loader: 'url-loader?limit=8192&name=assets/images/[hash].[ext]'
            },

            // 字体
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192&name=assets/fonts/[hash].[ext]'
            },

            // moment
            {
                test: require.resolve('moment'),
                loader: 'expose?moment'
            }
        ]
    },

    // postcss
    postcss: function (webpack) {

        var dependent = {
            addDependencyTo: webpack
        }

        var processors = [
            cssImport(dependent),
            cssMixins(dependent),
            cssExtend(dependent),
            conditionals(dependent),
            cssEach(dependent),
            cssFor(dependent),
            nested(dependent),
            cssSimpleVars(dependent),
            customMedia(dependent),
            cssAtroot(dependent),
            autoprefixer(dependent)
        ]

        return processors
    },

    // 其它解决方案配置
    resolve: {
        alias: {
            'ionic'        : path.resolve(__dirname, basePath.src, 'assets/plugins/ionic/js/ionic.js'),
            'ionic-angular': path.resolve(__dirname, basePath.src, 'assets/plugins/ionic/js/ionic-angular.js')
        },
        extensions: ['', '.js', '.json', '.css'],
        root: [
            path.resolve(__dirname),
            path.resolve(__dirname, basePath.src)
        ] 
    }
}

if (isProd) {
    config.plugins.push(
        // 压缩混淆文件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            }
        })
    )
    config.entry.app.unshift(path.resolve(__dirname, 'prod.config.js'))
} else {
    config.plugins.push(
        // new OpenBrowserPlugin({ 
        //     url: 'http://localhost:3000'
        // }),
        new webpack.DefinePlugin({
            DEBUG: true
        })
    )
    config.entry.app.unshift(path.resolve(__dirname, 'dev.config.js'))
    config.devtool = 'source-map'
}

module.exports = config