let path = require('path')
let htmlplugin = require('html-webpack-plugin')
let vueloaderplugin = require('vue-loader/lib/plugin')
const exhtmlplugin = new htmlplugin({
    template:'./index.html',
}) 
module.exports = {
    mode:'production',
    entry:'./index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        port:3001,
        open:true,
    },
    plugins:[
        exhtmlplugin,
        new vueloaderplugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],//表示预掉插件的集合
                        // plugins: [//下面的插件依赖上面的预调插件
                        //     // '@babel/plugin-proposal-class-properties',//解析es7 一些高级语法【例如 class,】
                        //     ["@babel/plugin-proposal-decorators", { "legacy": true }],//解析 @装饰器等高级语法
                        //     ['@babel/plugin-proposal-class-properties', { "loose": true }],////解析 @装饰器等高级语法 需要一起引入，并且引入有先后顺序
                        //     '@babel/plugin-transform-runtime' //帮助解析高级js语法
                        // ]
                    }
                },
                //表示该匹配规则只在include指定的文件夹下查找匹配
                // include:path.resolve(__dirname,'src'),
                // //排除哪些文件夹
                // exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
        ]
    }

}