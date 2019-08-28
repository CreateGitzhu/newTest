const pages = require('./config/pages.config')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    pages,
    productionSourceMap: false, // 生产环境禁用sourcemap
    chainWebpack: config => { // 使用的v4版本
        if (isProduction) {
            changeOptimization(config)
        } else {
            changeDevServer(config)
        }
    },
    css: {
        loaderOptions: {
            // 提供全局变量访问
            sass: {
                data: '@import "~@/assets/css/variable.scss";',
            },
        },
    },
}

function changeDevServer(config) {
    if (config && config.devServer) {
        const devServer = config.devServer
        // devServer.color(true)
        devServer.compress(true)
        devServer.disableHostCheck(true) // 否则https下会报错
        devServer.open(true)
        devServer.openPage('business/index')
        devServer.port(8082)
    }
}

function changeOptimization(config) {
    if (config && config.optimization) {
        const optimization = config.optimization
        if (optimization.has('minimizer')) {
            const minimizer = optimization.get('minimizer')
            const terserOptions = minimizer[0].options.terserOptions
            terserOptions.compress.drop_console = true
        }
    }
}