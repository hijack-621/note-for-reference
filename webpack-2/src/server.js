//webpack 内置了 express 可以直接用
let express = require('express')
let app = new express()
let webpack = require('webpack')
let path = require('path')
// let webpackmiddle = require('webpack-dev-middleware')
// let config = require(path.resolve('../','webpack.config.js'))
// let compiler =  webpack(config, function () {
//     console.log('__callback')
// })
// app.use(webpackmiddle(compiler))
console.log(path.resolve('../','webpack.config.js'))

app.get('/test', function(req, res){
    res.json({test:'webpack内置express测试,chongxie  fuwuqidiaoyong webpack'})
})

app.listen(4000)
