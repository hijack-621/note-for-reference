const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')
const prodConfig = { //导出一个对象
    mode: 'production',
}
module.exports = merge(baseConfig, prodConfig)