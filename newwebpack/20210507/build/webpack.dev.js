const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const devConfig = { //导出一个对象
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: './dist',
        open: true, //表示默认打包后打开浏览器
        hot: true, //开启热模块 替换
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

}
module.exports = merge(baseConfig, devConfig)